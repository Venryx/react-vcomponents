import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type TextInputProps = {
    value: string | null;
    enabled?: boolean;
    editable?: boolean;
    instant?: boolean;
    useEscape?: boolean;
    onChange?: (newVal: string, event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | // overridden
"disabled" | "readOnly" | // obsolete (due to custom props)
"min" | "max" | "step">;
export declare class TextInput extends BaseComponent<TextInputProps, {
    editedValue: string | null;
}> {
    static defaultProps: {
        enabled: boolean;
        editable: boolean;
        type: string;
        useEscape: boolean;
    };
    root: HTMLInputElement | null;
    render(): JSX.Element;
    GetValue(): string;
}
