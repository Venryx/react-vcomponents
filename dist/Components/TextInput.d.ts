import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type TextInputProps = {
    value: string;
    enabled?: boolean;
    editable?: boolean;
    style?: any;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    onChange?: (newVal: any, event: any) => void;
} & Exclude<React.HTMLProps<HTMLInputElement>, "disabled" | "readOnly">;
export declare class TextInput extends BaseComponent<TextInputProps, {
    editedValue: string;
}> {
    static defaultProps: {
        editable: boolean;
        type: string;
    };
    root: HTMLInputElement;
    render(): JSX.Element;
    GetValue(): string;
}
