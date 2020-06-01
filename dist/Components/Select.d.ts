/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export declare type Select_Props = {
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
    compareBy?: "name" | "value" | "value toString";
    value: any;
    verifyValue?: boolean;
    enabled?: boolean;
    className?: any;
    title?: any;
    style?: any;
    childStyle?: any;
    onChange?: any;
};
export declare class Select extends BaseComponent<Select_Props, {}> {
    static defaultProps: {
        enabled: boolean;
        displayType: string;
        compareBy: string;
        verifyValue: boolean;
    };
    constructor(props: any);
    static GetOptionsListFromProps(props: Select_Props): {
        name: string;
        value: any;
        style?: any;
    }[];
    get OptionsList(): {
        name: string;
        value: any;
        style?: any;
    }[];
    GetIndexOfOption(option: any): number;
    GetIndexOfOptionMatchingValue(value?: any): number;
    GetOptionMatchingValue(value?: any): {
        name: string;
        value: any;
        style?: any;
    };
    /** Finds the first "matching option", then returns that entry's "value" field. (vs this.props.value, which may only loosely match the entry's "value" field, as per "compareBy" property) */
    GetOptionValueMatchingValue(value?: any): any;
    root: HTMLSelectElement | null;
    render(): JSX.Element;
}
export declare class Dropdown_OptionUI extends BaseComponent<{
    index: any;
    style: any;
}, {}> {
    render(): JSX.Element;
}
export declare class ButtonBar_OptionUI extends BaseComponent<{
    first: any;
    last: any;
    selected: any;
    onSelect: any;
    style: any;
}, {
    hovered: boolean;
}> {
    render(): JSX.Element;
}
