import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class Row extends BaseComponent<{
    noShrink?: any;
    center?: any;
    style?: any;
} & React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
export declare class RowLR extends BaseComponent<{
    splitAt?: number | string;
    height?: number;
    className?: string;
    style?: any;
    leftStyle?: any;
    rightStyle?: any;
} & React.HTMLAttributes<HTMLDivElement>, {}> {
    static defaultProps: {
        splitAt: string;
    };
    render(): JSX.Element;
}
