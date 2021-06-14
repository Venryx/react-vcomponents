/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export declare class ColorPickerBox extends BaseComponent<{
    color: string;
    onChange?: (color: string) => void;
    popupStyle?: any;
}, {
    show: boolean;
    color: string;
}> {
    static Init(react_color: any, chroma_js: any): void;
    constructor(props: any);
    ComponentWillMountOrReceiveProps(props: any): void;
    render(): JSX.Element;
}
