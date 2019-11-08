import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import {Row} from "./Row";
import {ReactChildrenAsText, E} from "../Internals/FromJSVE";

export type CheckBoxProps = {
	text?: React.ReactNode, wrap?: boolean, title?: string, checked: boolean, indeterminate?: boolean,
	enabled?: boolean, style?, checkboxStyle?, labelStyle?, internalChanging?: boolean, onChange?: (val: boolean, e)=>void
};

@ApplyBasicStyles
export class CheckBox extends BaseComponent<CheckBoxProps, {editedValue: boolean}> {
	static defaultProps = {enabled: true};
	static lastID = -1;
	
	constructor(props) {
		super(props);
		this.id = ++CheckBox.lastID;
	}

	id;
	input: HTMLInputElement;
	render() {
		var {text, wrap, title, checked, enabled, style, checkboxStyle, labelStyle, internalChanging, onChange} = this.props;
		let {editedValue} = this.state;

		let textStr = ReactChildrenAsText(text, "");
		let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
		// if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
		let applyPre = wrap == false || (wrap != true && textHasEdgeSpaces);

		return (
			<Row center title={title} style={E({position: "relative"}, style)}>
				<input ref={c=>this.input = c} id={"checkBox_" + this.id} type="checkbox" disabled={!enabled} checked={checked || false}
					onChange={e=>onChange && onChange(this.input.checked, e)} style={checkboxStyle}/>
				{text &&
				<label htmlFor={"checkBox_" + this.id} style={E({marginLeft: 3}, applyPre && {whiteSpace: "pre"}, labelStyle)}><span/>{text}</label>}
			</Row>
			/*<input ref={c=>this.input = c} type="checkbox"
				checked={editedValue != null ? editedValue : (checked || false)}
				disabled={enabled == false}
				onChange={e=> {
					var newVal = this.input.checked;
					if (internalChanging) {
						this.SetState({editedValue: newVal});
					} else {
						onChange(newVal, e);
					}
				}}/>*/
		);
	}
	PostRender() {
		let {indeterminate} = this.props;
		this.input.indeterminate = indeterminate;
	}

	get Checked() { return this.input.checked; }
}

/*export class CheckBox_Auto extends BaseComponent<
		{text?, title?, style?, labelStyle?,
			path: ()=>any, onChange?: (val: boolean)=>void}, {}> {
	ComponentWillMountOrReceiveProps(props) {
		var {path} = props;
		let {node, key: propName} = path();
		this.AddChangeListeners(node,
			(propName + "_PostSet").Func(this.Update),
		);
	}

	render() {
		var {path, onChange, ...rest} = this.props;
		let {node, key: propName} = path();
		return (
			<CheckBox {...rest} checked={node[propName]}
				onChange={val=> {
					node.a(propName).set = val;
					if (onChange) onChange(val);
				}}/>
		);
	}
}*/