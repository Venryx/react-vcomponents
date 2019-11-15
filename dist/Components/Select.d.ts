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
        displayType: string;
        compareBy: string;
        verifyValue: boolean;
    };
    static ValidateProps(props: Select_Props): void;
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
    GetIndexOfValue(value: any): number;
    GetSelectedOption(): {
        name: string;
        value: any;
        style?: any;
    };
    GetSelectedValue(): any;
    root: HTMLSelectElement;
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
