/// <reference types="react" />
import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class Row extends BaseComponent<{
    style?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
export declare class RowLR extends BaseComponent<{
    splitAt?: number | string;
    height?: number;
    className?: string;
    style?;
    leftStyle?;
    rightStyle?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    static defaultProps: {
        splitAt: string;
    };
    render(): JSX.Element;
}
