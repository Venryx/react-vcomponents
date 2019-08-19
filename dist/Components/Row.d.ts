import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type RowProps = {
    noShrink?: any;
    center?: any;
    style?: any;
} & React.HTMLAttributes<HTMLDivElement>;
export declare class Row extends BaseComponent<RowProps, {}> {
    render(): JSX.Element;
}
export declare type RowLRProps = {
    splitAt?: number | string;
    height?: number;
    className?: string;
    style?: any;
    leftStyle?: any;
    rightStyle?: any;
} & React.HTMLAttributes<HTMLDivElement>;
export declare class RowLR extends BaseComponent<RowLRProps, {}> {
    static defaultProps: {
        splitAt: string;
    };
    render(): JSX.Element;
}
