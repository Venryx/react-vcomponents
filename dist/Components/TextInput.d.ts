import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type TextInputProps = {
    value: string;
    enabled?: boolean;
    onChange?: (newVal: any, event: any) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    style?: any;
} & React.HTMLProps<HTMLInputElement>;
export declare class TextInput extends BaseComponent<TextInputProps, {
    editedValue: string;
}> {
    static defaultProps: {
        type: string;
    };
    root: HTMLInputElement;
    render(): JSX.Element;
    GetValue(): string;
}
