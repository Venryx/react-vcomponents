import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type TextProps = {
    wrap?: boolean;
    style?: any;
} & React.HTMLAttributes<HTMLSpanElement>;
export declare class Text extends BaseComponent<TextProps, {}> {
    render(): JSX.Element;
}
