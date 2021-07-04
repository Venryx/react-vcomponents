import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import keycode from "keycode";
import {E, NumberCES_KeepBetween} from "../Internals/FromJSVE.js";

export type SpinnerProps = {
	enabled?: boolean, autoSize?: boolean,
	instant?: boolean, useEscape?: boolean,
	enforceRange?: boolean, validator?: (value: number)=>boolean|string,
	onChange?: (newValue: number, event: React.ChangeEvent<HTMLInputElement>)=>any,
} & Omit<FixHTMLProps<React.InputHTMLAttributes<HTMLInputElement>>, "onChange">;

@ApplyBasicStyles
export class Spinner extends BaseComponent<SpinnerProps, {editedValue: number|n}> {
	static defaultProps = {step: 1, min: 0, max: Number.MAX_SAFE_INTEGER, value: 0, enabled: true, useEscape: true};

	ComponentDidMountOrUpdate() {
		this.ValidateValue(this.props.value as number);
	}
	ValidateValue(value: number) {
		const {validator} = this.props;
		if (validator == null) {
			/*if (this.root?.validity.customError) {
				this.root?.setCustomValidity(null as any);
			}*/
			return;
		}
		const result = validator(value);
		if (result == true) this.root?.setCustomValidity("");
		else if (result == false) this.root?.setCustomValidity("Value is invalid.");
		else this.root?.setCustomValidity(result);
	}

	root: HTMLInputElement|n;
	render() {
		let {
			enabled, autoSize, instant, useEscape, enforceRange, validator, onChange,
			step, min, max, value, title, style, onBlur, onKeyDown,
			...rest
		} = this.props;
		let {editedValue} = this.state;

		style = E({color: "#000"}, style);
		//if (max == Number.MAX_SAFE_INTEGER && !("width" in style)) {
		if (!autoSize && !("width" in style)) {
			style.width = 60;
		}

		return (
			<input {...rest} ref={c=>this.root = c} type="number" step={step} min={min} max={max} value={editedValue != null ? editedValue : (value || 0)} disabled={enabled != true}
				title={title ?? undefined} style={style}
				onChange={e=> {
					var newVal = Number(e.target.value);
					if (enforceRange) newVal = NumberCES_KeepBetween(newVal, min as number, max as number);
					if (newVal == editedValue) return; // if no change, ignore event
					this.ValidateValue(newVal);

					if (!instant) {
						this.SetState({editedValue: newVal});
					} else {
						if (onChange) onChange(newVal, e);
						this.SetState({editedValue: null});
					}
				}}
				onBlur={e=> {
					var newVal = Number(e.target.value);
					if (newVal == value) return; // if no change, ignore event
					
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