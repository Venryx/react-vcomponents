/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
export declare type SpanProps = {
    pre?: any;
} & HTMLProps_Fixed<"span">;
export declare class Span extends BaseComponent<SpanProps, {}> {
    render(): JSX.Element;
}
export declare type PreProps = {
    allowWrap?: boolean;
} & HTMLProps_Fixed<"span">;
export declare class Pre extends BaseComponent<PreProps, {}> {
    render(): JSX.Element;
}
export declare type DivProps = {
    shouldUpdate?: any;
} & HTMLProps_Fixed<"div">;
export declare class Div extends BaseComponent<DivProps, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): JSX.Element;
}
