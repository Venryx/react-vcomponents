import React from "react";
import { BaseComponent } from "react-vextensions";
import { FixHTMLProps } from "../@Types.js";
export declare type TextProps = {
    wrap?: boolean;
    style?: any;
} & FixHTMLProps<React.HTMLAttributes<HTMLSpanElement>>;
export declare class Text extends BaseComponent<TextProps, {}> {
    render(): JSX.Element;
}
