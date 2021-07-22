/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
export declare type TextProps = {
    wrap?: boolean;
    style?: any;
} & HTMLProps_Fixed<"span">;
export declare class Text extends BaseComponent<TextProps, {}> {
    render(): JSX.Element;
}
