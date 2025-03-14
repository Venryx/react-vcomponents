import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { BaseComponent } from "react-vextensions";
import { RowProps } from "./Row.js";
import { n } from "../@Types.js";
export type CheckBoxProps = {
    text?: React.ReactNode;
    wrap?: boolean;
    enabled?: boolean;
    value: boolean | "partial";
    internalChanging?: boolean;
    onChange?: (val: boolean, e: any) => void;
    containerProps?: RowProps;
    title?: string | n;
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
    input: HTMLInputElement | n;
    render(): React.JSX.Element;
    PostRender(): void;
    get Checked(): boolean;
}
