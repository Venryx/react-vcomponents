import React, {InputHTMLAttributes, LabelHTMLAttributes} from "react";
import {BaseComponent, ApplyBasicStyles, cssHelper} from "react-vextensions";
import {Row, RowProps} from "./Row.js";
import {ReactChildrenAsText, E, Assert} from "../Internals/FromJSVE.js";
import {n} from "../@Types.js";

export type CheckBoxProps = {
	text?: React.ReactNode, wrap?: boolean, enabled?: boolean,
	value: boolean | "partial", internalChanging?: boolean, onChange?: (val: boolean, e)=>void,
	containerProps?: RowProps, title?: string|n, style?, // Why not "containerStyle"? Because if inherent props like "style" are exposed, it's always for the outermost element.
	checkboxProps?: InputHTMLAttributes<HTMLInputElement>, checkboxStyle?,
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>, labelStyle?,
};

@ApplyBasicStyles
export class CheckBox extends BaseComponent<CheckBoxProps, {editedValue: boolean}> {
	static defaultProps = {enabled: true};
	static lastID = -1;
	
	constructor(props) {
		super(props);
		this.id = ++CheckBox.lastID;
		//ValidateStandardProps(props);
	}

	id;
	input: HTMLInputElement|n;
	render() {
		var {text, wrap, title, value, enabled, containerProps, style, checkboxProps, checkboxStyle, labelProps, labelStyle, internalChanging, onChange} = this.props;
		let {editedValue} = this.state;

		let textStr = ReactChildrenAsText(text, "");
		let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
		// if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
		let applyPre = wrap == false || (wrap != true && textHasEdgeSpaces);

		const {css} = cssHelper(this);
		return (
			<Row {...containerProps as any} center title={title ?? undefined} style={css({position: "relative"}, style)}>
				<input ref={c=>this.input = c} {...checkboxProps} id={"checkBox_" + this.id} type="checkbox" disabled={enabled != true} checked={value == true}
					onChange={e=>{
						// if value was partial/indeterminate, and we click, return "false" as new-val (default behavior leaves dom in checked=true state)
						if (value == "partial") {
							this.input!.checked = false; // this isn't really necessary (since props-change will update dom.checked), but we'll do it for consistency
							onChange?.(false, e);
							return;
						}

						onChange?.(this.input!.checked, e);
					}} style={checkboxStyle}/>
				{text &&
				<label {...labelProps} htmlFor={"checkBox_" + this.id} style={css({marginLeft: 3}, applyPre && {whiteSpace: "pre"}, labelStyle)}><span/>{text}</label>}
			</Row>
			/*<input ref={c=>this.input = c} type="checkbox"
				checked={editedValue != null ? editedValue : (checked || false)}
				disabled={enabled != true}
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
		let {value} = this.props;
		this.input!.indeterminate = value == "partial";
	}

	get Checked() { return this.input!.checked; }
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