import { BaseComponent } from "react-vextensions";
export declare type Select_Props = {
    options: {
        name: string;
        value;
        style?;
    }[] | {
        name: string;
    }[] | string[] | any[] | {
        [s: string]: any;
    };
    displayType?: "dropdown" | "button bar";
    compareBy?: "name" | "value" | "value toString";
    value;
    verifyValue?: boolean;
    enabled?: boolean;
    className?;
    title?;
    style?;
    childStyle?;
    onChange;
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
    readonly OptionsList: {
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
    render(): JSX.Element;
}
export declare class Dropdown_OptionUI extends BaseComponent<{
    index;
    style;
}, {}> {
    render(): JSX.Element;
}
export declare class ButtonBar_OptionUI extends BaseComponent<{
    first;
    last;
    selected;
    onSelect;
    style;
}, {
    hovered: boolean;
}> {
    render(): JSX.Element;
}
