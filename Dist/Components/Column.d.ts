import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed, n } from "../@Types.js";
export type ColumnProps = {
    noShrink?: any;
    center?: any;
    style?: any;
} & HTMLProps_Fixed<"div">;
export declare class Column extends BaseComponent<ColumnProps, {}> {
    root: HTMLDivElement | n;
    render(): React.JSX.Element;
}
