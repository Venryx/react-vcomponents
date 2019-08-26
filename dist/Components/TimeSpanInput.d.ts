import { BaseComponent } from "react-vextensions";
import { TextInputProps } from "./TextInput";
export declare type TimeSpanProps = {
    /** Total time-span length in seconds. */
    value: number;
    onChange?: (totalSeconds: number) => any;
} & Omit<TextInputProps, "value" | "onChange">;
export declare class TimeSpanInput extends BaseComponent<TimeSpanProps, {}> {
    render(): JSX.Element;
}
