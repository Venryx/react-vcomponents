import React from "react";
import { BaseComponent } from "react-vextensions";
import { n } from "../@Types.js";
export type Select_Props = {
    options: {
        name: string;
        value: any;
        style?: any;
    }[] | {
        name: string;
    }[] | string[] | any[] | /*(new()=>Enum) |*/ {
        [s: string]: any;
    };
    displayType?: "dropdown" | "button bar";
    compareBy?: "name" | "value" | "value_strict" | "value_toString";
    /** If set, overrides compareBy. */ compareByFunc?: CompareByFunc;
    equateNullAndUndefined?: boolean;
    value: any;
    verifyValue?: boolean;
    addPlaceholderForInvalidValue?: boolean;
    enabled?: boolean;
    className?: any;
    title?: string | n;
    style?: any;
    childStyle?: Object | ((index: number) => Object);
    onChange?: any;
};
export type Select_Option = {
    name: string;
    value: any;
    style?: any;
};
export type CompareByFunc = (option: Select_Option, value: any) => boolean;
export declare const compareBy_defaultFuncs: {
    [key: string]: CompareByFunc;
};
export declare function GetFinalCompareByFunc(props: Select_Props): CompareByFunc;
export declare class Select extends BaseComponent<Select_Props, {}> {
    static defaultProps: {
        enabled: boolean;
        displayType: string;
        compareBy: string;
        equateNullAndUndefined: boolean;
        verifyValue: boolean;
    };
    constructor(props: any);
    static GetOptionsListFromProps(props: Select_Props): Select_Option[];
    get OptionsList(): Select_Option[];
    GetIndexOfOption(option: any): number;
    GetIndexOfOptionMatchingValue(value?: any): number;
    GetOptionMatchingValue(value?: any): Select_Option;
    /** Finds the first "matching option", then returns that entry's "value" field. (vs this.props.value, which may only loosely match the entry's "value" field, as per "compareBy" property) */
    GetOptionValueMatchingValue(value?: any): any;
    root: HTMLSelectElement | n;
    render(): React.JSX.Element;
}
export declare class Dropdown_OptionUI extends BaseComponent<{
    index: any;
    style: any;
}, {}> {
    render(): React.JSX.Element;
}
export declare class ButtonBar_OptionUI extends BaseComponent<{
    first: boolean;
    last: boolean;
    selected: boolean;
    enabled: boolean;
    style: any;
    onSelect: any;
}, {
    hovered: boolean;
}> {
    render(): React.JSX.Element;
}
