import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import * as keycode from "keycode";

@ApplyBasicStyles
export default class TextInput extends BaseComponent
		<{
			value: string, enabled?: boolean, onChange?: (newVal, event)=>void, onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>)=>any,
			delayChangeTillDefocus?: boolean, useEscape?: boolean,
			style?
		} & React.HTMLProps<HTMLInputElement>,
		{editedValue: string}> {
	static defaultProps = {type: "text"};
	/*ComponentWillReceiveProps(props) {
		// if value changing, and "delayChangeTillDefocus" is not enabled
		if (!props.delayChangeTillDefocus && props.value != this.props.value) {
			this.SetState({editedValue: null});
		}
	}*/
	render() {
		var {value, enabled, onChange, onKeyDown, delayChangeTillDefocus, useEscape, style, ...rest} = this.props;
		var {editedValue} = this.state;
		return (
			<input {...rest} ref="root" disabled={enabled == false} style={E({color: "black"}, style)}
				value={editedValue != null ? editedValue : (value || "")}
				onChange={e=> {
					var newVal = e.target.value;
					if (delayChangeTillDefocus) {
						this.SetState({editedValue: newVal});
					} else {
						onChange(newVal, e);
						this.SetState({editedValue: null});
					}
				}}
				onBlur={e=> {
					var newVal = e.target["value"];
					if (delayChangeTillDefocus && onChange) {
						onChange(newVal, e);
						this.SetState({editedValue: null});
					}
				}}
				onKeyDown={e=> {
					if (useEscape && e.keyCode == keycode.codes.esc) return void this.SetState({editedValue: null});
					if (onKeyDown) return onKeyDown(e);
				}}/>
		);
	}
	GetValue() {
		return this.refs.root.value;
	}
}

/*export class TextInput_Auto extends BaseComponent<
		{style?, delayChangeTillDefocus?,
			path: ()=>any, onChange?: (val: string)=>void}, {}> {
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
			<TextInput {...rest} value={node[propName]} onChange={val=> {
				node.a(propName).set = val;
				if (onChange) onChange(val);
			}}/>
		);
	}
}*/