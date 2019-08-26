import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type TextInputProps = {
    value: string;
    enabled?: boolean;
    editable?: boolean;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    onChange?: (newVal: string, event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | // overridden
"disabled" | "readOnly" | // obsolete (due to custom props)
"min" | "max" | "step">;
export declare class TextInput extends BaseComponent<TextInputProps, {
    editedValue: string;
}> {
    static defaultProps: {
        editable: boolean;
        type: string;
        useEscape: boolean;
    };
    root: HTMLInputElement;
    render(): JSX.Element;
    GetValue(): string;
}
