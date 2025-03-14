import React from "react";
import { BaseComponent } from "react-vextensions";
import { TextInputProps } from "./TextInput.js";
export declare const TimeUnit_values: readonly ["second", "minute", "hour", "day", "week"];
export declare const TimeUnit_stepUpMultipliers: number[];
export type TimeUnit = typeof TimeUnit_values[number];
export declare const TimeUnit_labels: {
    second: string;
    minute: string;
    hour: string;
    day: string;
    week: string;
};
export declare function GetTimeUnitFromLabel(unitLabel: string): TimeUnit;
export declare function GetStepUpMultiplierBetweenXAndY(unitX: TimeUnit, unitY: TimeUnit): number;
export declare function ConvertFromUnitXToY(valueInX: number, unitX: TimeUnit, unitY: TimeUnit): number;
export type TimeSpanProps = {
    largeUnit?: TimeUnit;
    smallUnit?: TimeUnit;
    showUnits?: boolean;
    min?: number;
    max?: number;
    /** Total time-span length in small-units (seconds, by default). */
    value: number;
    onChange?: (totalSmallUnits: number) => any;
} & Omit<TextInputProps, "value" | "onChange">;
declare const TimeSpanInput_base: (new (..._: any) => BaseComponent<TimeSpanProps, {}, object>) & {
    renderCount: number;
    lastRenderTime: number;
};
export declare class TimeSpanInput extends TimeSpanInput_base {
    constructor(props: any);
    render(): React.JSX.Element;
}
export {};
