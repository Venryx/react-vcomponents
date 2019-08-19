import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class Span extends BaseComponent<{
    pre?: any;
} & React.HTMLAttributes<HTMLSpanElement>, {}> {
    render(): JSX.Element;
}
export declare class Pre extends BaseComponent<{
    allowWrap?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>, {}> {
    render(): JSX.Element;
}
export declare class Div extends BaseComponent<{
    shouldUpdate?: any;
} & React.HTMLAttributes<HTMLDivElement>, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): JSX.Element;
}
