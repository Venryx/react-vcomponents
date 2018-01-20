/// <reference types="react" />
import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class TextArea extends BaseComponent<{
    value?;
    defaultValue?;
    editable?;
    className?;
    style?;
    onChange?: (newVal, event) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>, {
    editedValue: string;
}> {
    static defaultProps: {
        editable: boolean;
    };
    render(): JSX.Element;
}
export declare class TextArea_AutoSize extends BaseComponent<{
    enabled?: boolean;
    style?;
    onChange?;
    allowLineBreaks?: boolean;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>, {
    editedValue: string;
}> {
    static defaultProps: {
        allowLineBreaks: boolean;
    };
    render(): JSX.Element;
}
