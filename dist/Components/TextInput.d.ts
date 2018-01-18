/// <reference types="react" />
import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class TextInput extends BaseComponent<{
    value: string;
    enabled?: boolean;
    onChange?: (newVal, event) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    style?;
} & React.HTMLProps<HTMLInputElement>, {
    editedValue: string;
}> {
    static defaultProps: {
        type: string;
    };
    render(): JSX.Element;
    GetValue(): any;
}
