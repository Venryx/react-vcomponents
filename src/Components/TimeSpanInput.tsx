import {BaseComponent} from "react-vextensions";
import React from "react";
import {TextInput, TextInputProps} from "./TextInput";
import {Clone, ToNumber} from "../General";

export type TimeSpanProps = {
	/** Total time-span length in seconds. */
	value: number,
	onChange?: (totalSeconds: number)=>any,
} & Omit<TextInputProps, "value" | "onChange">;
export class TimeSpanInput extends BaseComponent<TimeSpanProps, {}> {
	render() {
		let {value, onChange, ...rest} = this.props;
		return (
			<TextInput {...rest} style={{width: 50}} value={`${Math.floor(value / 60)}:${(value % 60).toString().padStart(2, "0")}`} onChange={val=>{
				const parts = val.includes(":") ? val.split(":") : [val, "0"];
				const minutes = ToNumber(parts[0], 0);
				const seconds = ToNumber(parts[1], 0);
				const totalSeconds = Math.round(seconds + (minutes * 60));
				if (onChange) onChange(totalSeconds);
			}}/>
		);
	}
}