/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export declare type ColorArray_Input = [number, number, number, number?];
export declare type ColorArray = [number, number, number, number];
export declare type ColorPickerBox_Props = {
    color: ColorArray_Input;
    onChange?: (color: ColorArray) => void;
    popupStyle?: any;
};
export declare class ColorPickerBox extends BaseComponent<ColorPickerBox_Props, {
    show: boolean;
    color: ColorArray;
}> {
    static Init(react_color: any, chroma_js: any): void;
    constructor(props: any);
    ComponentWillMountOrReceiveProps(props: ColorPickerBox_Props): void;
    render(): JSX.Element;
}
