/// <reference types="react" />
import React from "react";
import { BaseComponent } from "react-vextensions";
export default class TextInput extends BaseComponent<{
    value: string;
    enabled?: boolean;
    onChange?: (newVal, event) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
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
