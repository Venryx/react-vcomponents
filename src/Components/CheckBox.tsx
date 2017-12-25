import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import {Row} from "./Row";

@ApplyBasicStyles
export class CheckBox extends BaseComponent
		<{
			text?, title?, checked: boolean, indeterminate?: boolean,
			enabled?: boolean, style?, labelStyle?, internalChanging?: boolean, onChange?: (val: boolean, e)=>void},
		{editedValue: boolean}> {
	static lastID = -1;
	
    constructor(props) {
        super(props);
        this.id = ++CheckBox.lastID;
    }

	id;
	input: HTMLInputElement;
	render() {
		var {text, title, checked, enabled, style, labelStyle, internalChanging, onChange} = this.props;
		let {editedValue} = this.state;
		return (
			<Row style={E({position: "relative"}, style)}>
				<input ref={c=>this.input = c} id={"checkBox_" + this.id} type="checkbox" checked={checked}
					onChange={e=>onChange && onChange(this.input.checked, e)}/>
				<label htmlFor={"checkBox_" + this.id} title={title} style={E({marginLeft: 3}, labelStyle)}><span/>{text}</label>
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