import React from "react";
import { BaseComponent } from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";
export declare class TextArea extends BaseComponent<{
    enabled?: boolean;
    editable?: boolean;
    className?: string;
    style?: any;
    onChange?: (newVal: any, event: any) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    autoSize?: boolean;
    autoSize_minHeight?: boolean;
    allowLineBreaks?: boolean;
} & Exclude<React.HTMLProps<HTMLTextAreaElement>, "disabled" | "readOnly">, {
    editedValue: string;
    minHeight: number;
}> {
    static defaultProps: {
        editable: boolean;
        allowLineBreaks: boolean;
    };
    root: TextAreaAutoSize | HTMLTextAreaElement;
    render(): JSX.Element;
}
