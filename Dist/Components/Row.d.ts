import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
export declare type RowProps = {
    noShrink?: any;
    center?: any;
    style?: any;
} & HTMLProps_Fixed<"div">;
export declare class Row extends BaseComponent<RowProps, {}> {
    render(): React.JSX.Element;
}
export declare type RowLRProps = {
    splitAt?: number | string;
    height?: number;
    className?: string;
    style?: any;
    leftStyle?: any;
    rightStyle?: any;
} & HTMLProps_Fixed<"div">;
export declare class RowLR extends BaseComponent<RowLRProps, {}> {
    static defaultProps: {
        splitAt: string;
    };
    render(): React.JSX.Element;
}
