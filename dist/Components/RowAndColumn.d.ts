import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class RowAndColumn extends BaseComponent<{
    outerComp?: "Row" | "Column";
    rowCenter?: any;
    columnCenter?: any;
    rowStyle?: any;
    columnStyle?: any;
    rowProps?: any;
    columnProps?: any;
} & React.HTMLProps<HTMLDivElement>, {}> {
    static defaultProps: {
        outerComp: string;
    };
    render(): JSX.Element;
}
