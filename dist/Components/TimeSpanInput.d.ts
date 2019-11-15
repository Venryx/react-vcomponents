/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { TextInputProps } from "./TextInput";
export declare type TimeSpanProps = {
    smallUnit?: "seconds" | "minutes";
    showUnits?: boolean;
    /** Total time-span length in small-units (seconds, by default). */
    value: number;
    onChange?: (totalSmallUnits: number) => any;
} & Omit<TextInputProps, "value" | "onChange">;
export declare class TimeSpanInput extends BaseComponent<TimeSpanProps, {}> {
    static defaultProps: {
        smallUnit: string;
        showUnits: boolean;
    };
    render(): JSX.Element;
}
