import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed, n } from "../@Types.js";
export type SpanProps = {
    pre?: any;
} & HTMLProps_Fixed<"span">;
export declare class Span extends BaseComponent<SpanProps, {}> {
    render(): React.JSX.Element;
}
export type PreProps = {
    allowWrap?: boolean;
} & HTMLProps_Fixed<"span">;
export declare class Pre extends BaseComponent<PreProps, {}> {
    render(): React.JSX.Element;
}
export type DivProps = {
    shouldUpdate?: any;
} & HTMLProps_Fixed<"div">;
export declare class Div extends BaseComponent<DivProps, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    root: HTMLDivElement | n;
    render(): React.JSX.Element;
}
