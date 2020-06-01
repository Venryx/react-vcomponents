import React from "react";
import { BaseComponent } from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";
export declare class TextArea extends BaseComponent<{
    enabled?: boolean;
    editable?: boolean;
    pattern?: string;
    onChange?: (newVal: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    autoSize?: boolean;
    autoSize_minHeight?: boolean;
    allowLineBreaks?: boolean;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "disabled" | "readOnly">, {
    editedValue: string | null;
    minHeight: number;
}> {
    static defaultProps: {
        enabled: boolean;
        editable: boolean;
        allowLineBreaks: boolean;
        useEscape: boolean;
    };
    root: TextAreaAutoSize | HTMLTextAreaElement;
    render(): JSX.Element;
}
