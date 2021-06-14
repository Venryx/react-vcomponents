import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { BaseComponent } from "react-vextensions";
import { RowProps } from "./Row.js";
export declare type CheckBoxProps = {
    text?: React.ReactNode;
    wrap?: boolean;
    enabled?: boolean;
    value: boolean | "partial";
    internalChanging?: boolean;
    onChange?: (val: boolean, e: any) => void;
    containerProps?: RowProps;
    title?: string;
    style?: any;
    checkboxProps?: InputHTMLAttributes<HTMLInputElement>;
    checkboxStyle?: any;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    labelStyle?: any;
};
export declare class CheckBox extends BaseComponent<CheckBoxProps, {
    editedValue: boolean;
}> {
    static defaultProps: {
        enabled: boolean;
    };
    static lastID: number;
    constructor(props: any);
    id: any;
    input: HTMLInputElement | null;
    render(): JSX.Element;
    PostRender(): void;
    get Checked(): boolean;
}
