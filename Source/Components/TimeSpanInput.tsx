import React from "react";
import {BaseComponent, BaseComponentPlus} from "react-vextensions";
import {ToNumber, Assert, IsNaN, NumberCES_KeepBetween} from "../Internals/FromJSVE";
import {TextInput, TextInputProps} from "./TextInput";

export const TimeUnit_values = ["second", "minute", "hour", "day", "week"] as const;
export const TimeUnit_stepUpMultipliers = [0, 60, 60, 24, 7];
export type TimeUnit = typeof TimeUnit_values[number];
export const TimeUnit_labels = {second: "s", minute: "m", hour: "h", day: "d", week: "w"};

export function GetTimeUnitFromLabel(unitLabel: string) {
	return Object.entries(TimeUnit_labels).find(a=>a[1] == unitLabel)![0] as TimeUnit;
}
export function GetStepUpMultiplierBetweenXAndY(unitX: TimeUnit, unitY: TimeUnit){
	let unitIndexes = [TimeUnit_values.indexOf(unitX), TimeUnit_values.indexOf(unitY)];
	let stepUpMultipliers = TimeUnit_stepUpMultipliers.slice(Math.min(...unitIndexes) + 1, Math.max(...unitIndexes) + 1);
	let stepUpMultipliers_combined = stepUpMultipliers.reduce((multiplier, result)=>result * multiplier, 1);
	return stepUpMultipliers_combined;
}
export function ConvertFromUnitXToY(valueInX: number, unitX: TimeUnit, unitY: TimeUnit) {
	if (unitX == unitY) return valueInX;
	let stepUpMultipliers_combined = GetStepUpMultiplierBetweenXAndY(unitX, unitY);
	// if converting from large-unit to small-unit, multiply
	if (TimeUnit_values.indexOf(unitX) > TimeUnit_values.indexOf(unitY)) {
		return valueInX * stepUpMultipliers_combined;
	}
	// else (if converting from small-unit to large-unit), divide
	return valueInX / stepUpMultipliers_combined;
}

export type TimeSpanProps = {
	largeUnit?: TimeUnit,
	smallUnit?: TimeUnit,
	showUnits?: boolean,

	min?: number,
	max?: number,
	/** Total time-span length in small-units (seconds, by default). */
	value: number,
	onChange?: (totalSmallUnits: number)=>any,
} & Omit<TextInputProps, "value" | "onChange">;
export class TimeSpanInput extends BaseComponentPlus({largeUnit: "minute", smallUnit: "second", showUnits: true, min: 0, max: Number.MAX_SAFE_INTEGER} as TimeSpanProps, {}) {
	constructor(props) {
		super(props);
		let {largeUnit, smallUnit} = this.props;
		if (largeUnit) {
			Assert(TimeUnit_values.indexOf(largeUnit!) > TimeUnit_values.indexOf(smallUnit!), "Large-unit must be larger than small-unit!");
			Assert(TimeUnit_values.indexOf(largeUnit!) != TimeUnit_values.indexOf(smallUnit!), "Large-unit cannot be the same as small-unit!");
		}
		Assert(smallUnit != null, "Small-unit cannot be null!");
	}
	
	render() {
		const {largeUnit, smallUnit, showUnits, min, max, value, onChange, ...rest} = this.props;
		const valueAbs = Math.abs(value);

		let valueStr: string|null = null;
		if (value != null) {
			const signStr = value < 0 ? "-" : "";
			const stepUpMultiplier = GetStepUpMultiplierBetweenXAndY(smallUnit!, largeUnit!);
			if (largeUnit) {
				const largeUnitStr = `${Math.floor(valueAbs / stepUpMultiplier)}${TimeUnit_labels[largeUnit!]}`;
				const smallUnitStr = `${valueAbs % stepUpMultiplier}${TimeUnit_labels[smallUnit!]}`;
				valueStr = `${signStr}${largeUnitStr}:${smallUnitStr}`;
			} else {
				valueStr = `${signStr}${valueAbs}${TimeUnit_labels[smallUnit!]}`;
			}
		}
		
		let inputItself = (
			<TextInput {...rest} style={{width: 70}} value={valueStr} onChange={valStr=>{
				const isNegative = valStr.includes("-");
				const strNoSign = isNegative ? valStr.replace(/-/g, "") : valStr;
				const segments = strNoSign.split(":").map(a=>a.trim());

				function ConvertSegmentToSmallUnits(segment: string, unitForPos: TimeUnit) {
					const [_, digitsStr, unitLabel] = segment.match(/(\d+)(\D+)?$/) ?? [null, null, null];
					let hasUnitLabel = Object.values(TimeUnit_labels).includes(unitLabel!);

					let rawNumber = ToNumber(digitsStr, 0);
					// if unit specified by text, use it; else, assume it's: smallUnit (if last segment), else largeUnit (if exists)
					let unitName = hasUnitLabel ? GetTimeUnitFromLabel(unitLabel!) : unitForPos;
					return ConvertFromUnitXToY(rawNumber, unitName!, smallUnit!);
				}

				let totalSmallUnits = 0;
				if (largeUnit) {
					// if only one segment found, interpret the one segment as the large-unit (lets user input value as decimal, eg. 1.5h parsed as 1h:30m)
					if (segments.length == 1) {
						totalSmallUnits += ConvertSegmentToSmallUnits(segments[segments.length - 1], largeUnit);
					} else {
						totalSmallUnits += ConvertSegmentToSmallUnits(segments[segments.length - 1], smallUnit!);
						totalSmallUnits += ConvertSegmentToSmallUnits(segments[segments.length - 2], largeUnit);
					}
				} else {
					totalSmallUnits += ConvertSegmentToSmallUnits(segments[segments.length - 1], smallUnit!);
				}
				if (isNegative) totalSmallUnits *= -1;
				
				totalSmallUnits = NumberCES_KeepBetween(totalSmallUnits, min!, max!);

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