import React from "react";
import {BaseComponent} from "react-vextensions";
import {ToNumber} from "../General";
import {TextInput, TextInputProps} from "./TextInput";

export type TimeSpanProps = {
	/** Total time-span length in seconds. */
	value: number,
	onChange?: (totalSeconds: number)=>any,
} & Omit<TextInputProps, "value" | "onChange">;
export class TimeSpanInput extends BaseComponent<TimeSpanProps, {}> {
	render() {
		const {value, onChange, ...rest} = this.props;
		const valueAbs = Math.abs(value);
		return (
			<TextInput {...rest} style={{width: 60}} value={`${value >= 0 ? "" : "-"}${Math.floor(valueAbs / 60)}:${(valueAbs % 60).toString().padStart(2, "0")}`} onChange={valStr=>{
				const isNegative = valStr.includes("-");
				const strNoSign = isNegative ? valStr.replace(/-/g, "") : valStr;
				const parts = strNoSign.includes(":") ? strNoSign.split(":") : [valStr, "0"];

				const minutes = ToNumber(parts[0], 0);
				const seconds = ToNumber(parts[1], 0);
				const totalSeconds = Math.round(seconds + (minutes * 60)) * (isNegative ? -1 : 1);
				if (onChange) onChange(totalSeconds);
			}}/>
		);
	}
}