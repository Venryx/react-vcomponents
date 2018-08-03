import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class TextArea extends BaseComponent<{
    enabled?: boolean;
    editable?: boolean;
    className?: string;
    style?: any;
    onChange?: (newVal: any, event: any) => void;
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
    style?: any;
    onChange?: any;
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
