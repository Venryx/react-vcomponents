import React from "react";
import { BaseComponent } from "react-vextensions";
import { default as TextAreaAutoSize } from "react-textarea-autosize";
import { FixHTMLProps, n } from "../@Types.js";
export type TextAreaProps = {
    enabled?: boolean;
    editable?: boolean;
    pattern?: string;
    onChange?: (newVal: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    instant?: boolean;
    useEscape?: boolean;
    autoSize?: boolean;
    autoSize_minHeight?: boolean;
    allowLineBreaks?: boolean;
} & Omit<FixHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>, "onChange" | "disabled" | "readOnly">;
export declare class TextArea extends BaseComponent<TextAreaProps, {
    editedValue: string | n;
    minHeight: number;
}> {
    static defaultProps: {
        enabled: boolean;
        editable: boolean;
        allowLineBreaks: boolean;
        useEscape: boolean;
    };
    root: typeof TextAreaAutoSize | HTMLTextAreaElement;
    render(): React.JSX.Element;
}
