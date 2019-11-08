import React from "react";
import {BaseComponent} from "react-vextensions";
import {ToNumber} from "../Internals/FromJSVE";
import {TextInput, TextInputProps} from "./TextInput";

export type TimeSpanProps = {
	smallUnit?: "seconds" | "minutes",
	showUnits?: boolean,

	/** Total time-span length in small-units (seconds, by default). */
	value: number,
	onChange?: (totalSmallUnits: number)=>any,
} & Omit<TextInputProps, "value" | "onChange">;
export class TimeSpanInput extends BaseComponent<TimeSpanProps, {}> {
	static defaultProps = {smallUnit: "seconds", showUnits: true};
	render() {
		const {smallUnit, showUnits, value, onChange, ...rest} = this.props;
		const valueAbs = Math.abs(value);

		let unitLabels = showUnits ? {minutes: ["h", "m"], seconds: ["m", "s"]}[smallUnit] : ["", ""];
		let valueStr: string = null;
		if (value != null) {
			valueStr = `${value < 0 ? "-" : ""}${Math.floor(valueAbs / 60)}${unitLabels[0]}:${valueAbs % 60}${unitLabels[1]}`;
		}
		
		let inputItself = (
			<TextInput {...rest} style={{width: 70}} value={valueStr} onChange={valStr=>{
				const isNegative = valStr.includes("-");
				const strNoSign = isNegative ? valStr.replace(/-/g, "") : valStr;
				//const parts = strNoSign.includes(":") ? strNoSign.split(":") : [valStr, "0"];
				const parts = strNoSign.split(":").map(a=>a.trim());

				/*let bigUnits = ToNumber(parts[0], 0);
				let smallUnits = ToNumber(parts[1], 0);*/
				let totalSeconds = 0;
				parts.forEach((part, index)=> {
					let hasUnitLabel = "hms".split("").includes(part[part.length - 1]);
					let numberStr = hasUnitLabel ? part.slice(0, -1) : part;
					let unitLabel = hasUnitLabel ? part[part.length - 1] : unitLabels[index == 0 ? 0 : 1]; // if no unit specified, assume it's: bigUnit (if part 1), or smallUnit (if part 2+)

					let unitAsSeconds =
						unitLabel == "h" ? 1 * 60 * 60 :
						unitLabel == "m" ? 1 * 60 :
						/*unitLabel == "s" ?*/ 1;
					let valueAsSeconds = ToNumber(numberStr) * unitAsSeconds;
					totalSeconds += valueAsSeconds;
				});

				//const totalSmallUnits = Math.round(smallUnits + (bigUnits * 60)) * (isNegative ? -1 : 1);
				let totalSmallUnits = (smallUnit == "seconds" ? totalSeconds : totalSeconds / 60) * (isNegative ? -1 : 1);
				if (onChange) onChange(totalSmallUnits);
			}}/>
		);

		/*if (!showUnits) {
			return inputItself;
		}
		/*return (
			<Row style={{position: "relative"}}>
				{inputItself}
				<Row style={{position: "absolute", left: 0, bottom: 0, right: 0, height: 10, pointerEvents: "none"}}>
					<div style={{flex: 1, fontSize: 11, textAlign: "center", color: "black"}}>{smallUnit == "seconds" ? "m" : "h"}</div>
					<div style={{flex: 1, fontSize: 11, textAlign: "center", color: "black"}}>{smallUnit == "seconds" ? "s" : "m"}</div>
				</Row>
			</Row>
		);*#/
		return (
			<Row center>
				{inputItself}
				<Text ml={3} style={{fontSize: 12}}>{smallUnit == "minutes" ? "h:m" : "m:s"}</Text>
			</Row>
		);*/

		return inputItself;
	}
}