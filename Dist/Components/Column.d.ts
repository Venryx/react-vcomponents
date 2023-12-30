import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
export declare type ColumnProps = {
    noShrink?: any;
    center?: any;
    style?: any;
} & HTMLProps_Fixed<"div">;
export declare class Column extends BaseComponent<ColumnProps, {}> {
    render(): React.JSX.Element;
}
