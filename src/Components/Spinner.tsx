import React from "react";
import {BaseComponent, E, ApplyBasicStyles} from "react-vextensions";
import keycode from "keycode";

export type SpinnerProps = {
	enabled?: boolean, autoSize?: boolean,
	delayChangeTillDefocus?: boolean, useEscape?: boolean,
	onChange?: (newValue: number, event: React.ChangeEvent<HTMLInputElement>)=>any,
} & React.InputHTMLAttributes<HTMLInputElement>;

@ApplyBasicStyles
export class Spinner extends BaseComponent<SpinnerProps, {editedValue: number}> {
	static defaultProps = {step: 1, min: 0, max: Number.MAX_SAFE_INTEGER, value: 0, enabled: true, useEscape: true};

	root: HTMLInputElement;
	render() {
		let {
			step, min, max, value, enabled, title, autoSize, style, delayChangeTillDefocus, useEscape,
			onChange, onBlur, onKeyDown,
			...rest
		} = this.props;
		let {editedValue} = this.state;

		style = E({color: "#000"}, style);
		//if (max == Number.MAX_SAFE_INTEGER && !("width" in style)) {
		if (!autoSize && !("width" in style)) {
			style.width = 60;
		}

		return (
			<input {...rest} ref={c=>this.root = c} type="number" step={step} min={min} max={max} value={editedValue != null ? editedValue : (value || 0)} disabled={!enabled}
				title={title} style={style}
				onChange={e=> {
					var newVal = Number(e.target.value);
					if (newVal == editedValue) return; // if no change, ignore event

					if (delayChangeTillDefocus) {
						this.SetState({editedValue: newVal});
					} else {
						if (onChange) onChange(newVal, e);
						this.SetState({editedValue: null});
					}
				}}
				onBlur={e=> {
					var newVal = Number(e.target.value);
					if (newVal == value) return; // if no change, ignore event
					
					if (delayChangeTillDefocus) {
						if (onChange) onChange(newVal, e);
						this.SetState({editedValue: null});
					}
					if (onBlur) return onBlur(e);
				}}
				onKeyDown={e=> {
					if (delayChangeTillDefocus && useEscape && e.keyCode == keycode.codes.esc) return void this.SetState({editedValue: null});
					if (onKeyDown) return onKeyDown(e);
				}}/>
		);
	}
}

/*export class Spinner_Auto extends BaseComponent
		<{step?, min?, max?, enabled?, title?, style?, onFocus?,
			path: ()=>any, onChange?: (val: number)=>void}, {}> {
	static defaultProps = {step: 1, min: 0, max: Number.MAX_SAFE_INTEGER};

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
			<Spinner {...rest} value={node[propName]} onChange={val=> {
				node.a(propName).set = val;
				if (onChange) onChange(val);
			}}/>
		);
	}
}*/