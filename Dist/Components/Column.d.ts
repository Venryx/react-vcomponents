import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type ColumnProps = {
    noShrink?: any;
    center?: any;
    style?: any;
} & FixHTMLProps<React.HTMLAttributes<HTMLDivElement>>;
export declare class Column extends BaseComponent<ColumnProps, {}> {
    render(): JSX.Element;
}
