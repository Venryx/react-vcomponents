import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type CheckBoxProps = {
    text?: React.ReactNode;
    wrap?: boolean;
    title?: string;
    checked: boolean;
    indeterminate?: boolean;
    enabled?: boolean;
    style?: any;
    checkboxStyle?: any;
    labelStyle?: any;
    internalChanging?: boolean;
    onChange?: (val: boolean, e: any) => void;
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
    input: HTMLInputElement;
    render(): JSX.Element;
    PostRender(): void;
    get Checked(): boolean;
}
