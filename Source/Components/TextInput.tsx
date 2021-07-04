import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import * as keycode from "keycode";
import {E} from "../Internals/FromJSVE.js";
import {FixHTMLProps, n} from "../@Types.js";

export type TextInputProps = {
	value: string|n, enabled?: boolean, editable?: boolean,
	instant?: boolean, useEscape?: boolean,
	onChange?: (newVal: string, event: React.ChangeEvent<HTMLInputElement>)=>void,
} & Omit<FixHTMLProps<React.InputHTMLAttributes<HTMLInputElement>>,
	"value" | "onChange" | // overridden
	"disabled" | "readOnly" | // obsolete (due to custom props)
	"min" | "max" | "step" // not-applicable
>;

@ApplyBasicStyles
export class TextInput extends BaseComponent<TextInputProps, {editedValue: string|n}> {
	static defaultProps = {enabled: true, editable: true, type: "text", useEscape: true};
	/*ComponentWillReceiveProps(props) {
		// if value changing, and "instant" is enabled
		if (props.instant && props.value != this.props.value) {
			this.SetState({editedValue: null});
		}
	}*/

	root: HTMLInputElement|n;
	render() {
		var {
			value, enabled, editable, onChange, instant, useEscape, style,
			onBlur, onKeyDown, title,
			...rest
		} = this.props;
		var {editedValue} = this.state;
		return (
			<input {...rest} ref={c=>this.root = c} title={title ?? undefined} disabled={enabled != true} readOnly={!editable} style={E({color: "black"}, style)}
				value={editedValue != null ? editedValue : (value || "")}
				onChange={e=> {
					var newVal = e.target.value;
					if (newVal == editedValue) return; // if no text change, ignore event

					if (!instant) {
						this.SetState({editedValue: newVal});
					} else {
						if (onChange) onChange(newVal, e);
						this.SetState({editedValue: null});
					}
				}}
				onBlur={e=> {
					var newVal = e.target["value"];
					if (newVal == value) return; // if no text change, ignore event
					
					if (!instant) {
						if (onChange) onChange(newVal, e);
						this.SetState({editedValue: null});
					}
					if (onBlur) return onBlur(e);
				}}
				onKeyDown={e=> {
					if (!instant && useEscape && e.keyCode == keycode.codes.esc) return void this.SetState({editedValue: null});
					if (onKeyDown) return onKeyDown(e);
				}}/>
		);
	}
	GetValue() {
		return this.root!.value;
	}
}

/*export class TextInput_Auto extends BaseComponent<
		{style?, instant?,
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