var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { BaseComponentPlus } from "react-vextensions";
import { ToNumber, Assert } from "../Internals/FromJSVE";
import { TextInput } from "./TextInput";
export const TimeUnit_values = ["second", "minute", "hour", "day", "week"];
export const TimeUnit_stepUpMultipliers = [0, 60, 60, 24, 7];
export const TimeUnit_labels = { second: "s", minute: "m", hour: "h", day: "d", week: "w" };
export function GetTimeUnitFromLabel(unitLabel) {
    return Object.entries(TimeUnit_labels).find(a => a[1] == unitLabel)[0];
}
export function GetStepUpMultiplierBetweenXAndY(unitX, unitY) {
    let unitIndexes = [TimeUnit_values.indexOf(unitX), TimeUnit_values.indexOf(unitY)];
    let stepUpMultipliers = TimeUnit_stepUpMultipliers.slice(Math.min(...unitIndexes) + 1, Math.max(...unitIndexes) + 1);
    let stepUpMultipliers_combined = stepUpMultipliers.reduce((multiplier, result) => result * multiplier, 1);
    return stepUpMultipliers_combined;
}
export function ConvertFromUnitXToY(valueInX, unitX, unitY) {
    if (unitX == unitY)
        return valueInX;
    let stepUpMultipliers_combined = GetStepUpMultiplierBetweenXAndY(unitX, unitY);
    // if converting from large-unit to small-unit, multiply
    if (TimeUnit_values.indexOf(unitX) > TimeUnit_values.indexOf(unitY)) {
        return valueInX * stepUpMultipliers_combined;
    }
    // else (if converting from small-unit to large-unit), divide
    return valueInX / stepUpMultipliers_combined;
}
export class TimeSpanInput extends BaseComponentPlus({ largeUnit: "minute", smallUnit: "second", showUnits: true }, {}) {
    constructor(props) {
        super(props);
        let { largeUnit, smallUnit } = this.props;
        Assert(TimeUnit_values.indexOf(largeUnit) > TimeUnit_values.indexOf(smallUnit), "Large-unit must be larger than small-unit!");
        Assert(TimeUnit_values.indexOf(largeUnit) != TimeUnit_values.indexOf(smallUnit), "Large-unit cannot be the same as small-unit!");
    }
    render() {
        const _a = this.props, { largeUnit, smallUnit, showUnits, value, onChange } = _a, rest = __rest(_a, ["largeUnit", "smallUnit", "showUnits", "value", "onChange"]);
        const valueAbs = Math.abs(value);
        let valueStr = null;
        if (value != null) {
            const signStr = value < 0 ? "-" : "";
            const stepUpMultiplier = GetStepUpMultiplierBetweenXAndY(smallUnit, largeUnit);
            const largeUnitStr = `${Math.floor(valueAbs / stepUpMultiplier)}${TimeUnit_labels[largeUnit]}`;
            const smallUnitStr = `${valueAbs % stepUpMultiplier}${TimeUnit_labels[smallUnit]}`;
            valueStr = `${signStr}${largeUnitStr}:${smallUnitStr}`;
        }
        let inputItself = (React.createElement(TextInput, Object.assign({}, rest, { style: { width: 70 }, value: valueStr, onChange: valStr => {
                const isNegative = valStr.includes("-");
                const strNoSign = isNegative ? valStr.replace(/-/g, "") : valStr;
                //const parts = strNoSign.includes(":") ? strNoSign.split(":") : [valStr, "0"];
                const parts = strNoSign.split(":").map(a => a.trim());
                let totalSmallUnits = 0;
                parts.forEach((part, index) => {
                    let hasUnitLabel = Object.values(TimeUnit_labels).includes(part[part.length - 1]);
                    let rawNumber = ToNumber(hasUnitLabel ? part.slice(0, -1) : part, 0);
                    // if unit specified by text, use it; else, assume it's: largeUnit (if part 1), or smallUnit (if part 2+)
                    let unitName = hasUnitLabel ? GetTimeUnitFromLabel(part[part.length - 1]) : (index == 0 ? largeUnit : smallUnit);
                    totalSmallUnits += ConvertFromUnitXToY(rawNumber, unitName, smallUnit);
                });
                if (isNegative)
                    totalSmallUnits *= -1;
                if (onChange)
                    onChange(totalSmallUnits);
            } })));
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
