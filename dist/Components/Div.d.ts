/// <reference types="react" />
import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class Span extends BaseComponent<{
    pre?;
} & React.HTMLProps<HTMLSpanElement>, {}> {
    render(): JSX.Element;
}
export declare class Pre extends BaseComponent<{
    allowWrap?: boolean;
} & React.HTMLProps<HTMLSpanElement>, {}> {
    render(): JSX.Element;
}
export declare class Div extends BaseComponent<{
    shouldUpdate?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): JSX.Element;
}
