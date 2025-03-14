import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed, n } from "../@Types.js";
export type TextInputProps = {
    value: string | n;
    enabled?: boolean;
    editable?: boolean;
    instant?: boolean;
    useEscape?: boolean;
    onChange?: (newVal: string, event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<HTMLProps_Fixed<"input">, "value" | "onChange" | // overridden
"disabled" | "readOnly" | // obsolete (due to custom props)
"min" | "max" | "step">;
export declare class TextInput extends BaseComponent<TextInputProps, {
    editedValue: string | n;
}> {
    static defaultProps: {
        enabled: boolean;
        editable: boolean;
        type: string;
        useEscape: boolean;
    };
    root: HTMLInputElement | n;
    render(): React.JSX.Element;
    GetValue(): string;
}
