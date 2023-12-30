import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
export declare type TextProps = {
    keepWhitespace?: boolean;
    wrap?: boolean;
    style?: any;
} & HTMLProps_Fixed<"span">;
export declare class Text extends BaseComponent<TextProps, {}> {
    render(): React.JSX.Element;
}
