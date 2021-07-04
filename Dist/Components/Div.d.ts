import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type SpanProps = {
    pre?: any;
} & FixHTMLProps<React.HTMLAttributes<HTMLSpanElement>>;
export declare class Span extends BaseComponent<SpanProps, {}> {
    render(): JSX.Element;
}
export declare type PreProps = {
    allowWrap?: boolean;
} & FixHTMLProps<React.HTMLAttributes<HTMLSpanElement>>;
export declare class Pre extends BaseComponent<PreProps, {}> {
    render(): JSX.Element;
}
export declare type DivProps = {
    shouldUpdate?: any;
} & FixHTMLProps<React.HTMLAttributes<HTMLDivElement>>;
export declare class Div extends BaseComponent<DivProps, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): JSX.Element;
}
