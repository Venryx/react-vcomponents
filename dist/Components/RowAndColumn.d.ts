import { BaseComponent } from "react-vextensions";
import { RowProps } from "..";
import { ColumnProps } from "./Column";
export declare class RowAndColumn extends BaseComponent<{
    outerComp?: "Row" | "Column";
    rowCenter?: any;
    columnCenter?: any;
    rowStyle?: any;
    columnStyle?: any;
    rowProps?: Partial<RowProps>;
    columnProps?: Partial<ColumnProps>;
}, {}> {
    static defaultProps: {
        outerComp: string;
    };
    render(): JSX.Element;
}
