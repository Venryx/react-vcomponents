import React from "react";
import { BaseComponent } from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";
import { FixHTMLProps, n } from "../@Types.js";
export declare class TextArea extends BaseComponent<{
    enabled?: boolean;
    editable?: boolean;
    pattern?: string;
    onChange?: (newVal: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    instant?: boolean;
    useEscape?: boolean;
    autoSize?: boolean;
    autoSize_minHeight?: boolean;
    allowLineBreaks?: boolean;
} & Omit<FixHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>, "onChange" | "disabled" | "readOnly">, {
    editedValue: string | n;
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
