/// <reference types="react" />
import React from "react";
import ShallowCompare from "react/lib/shallowCompare";
import { BaseComponent } from "./BaseComponent";
export { ShallowCompare };
declare global  {
    function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
}
export declare function FindDOM(comp: any): HTMLElement;
export declare function FindReact(dom: any): BaseComponent<any, any>;
export declare function GetInnerComp(wrapperComp: React.Component<any, any>): any;
export declare type numberOrSuch = number | string;
export interface BaseProps {
    m?: numberOrSuch;
    ml?: numberOrSuch;
    mr?: numberOrSuch;
    mt?: numberOrSuch;
    mb?: numberOrSuch;
    mlr?: numberOrSuch | "margin left-right";
    mtb?: numberOrSuch | "margin top-bottom";
    p?: numberOrSuch;
    pl?: numberOrSuch;
    pr?: numberOrSuch;
    pt?: numberOrSuch;
    pb?: numberOrSuch;
    plr?: numberOrSuch | "padding left-right";
    ptb?: numberOrSuch | "padding top-bottom";
    sel?: boolean;
    ct?: boolean;
    tabLabel?: string;
    active?: boolean;
    page?: any;
    match?: any;
}
export declare var basePropFullKeys: {
    m: string;
    ml: string;
    mr: string;
    mt: string;
    mb: string;
    mlr: any;
    mtb: any;
    p: string;
    pl: string;
    pr: string;
    pt: string;
    pb: string;
    plr: any;
    ptb: any;
    sel: any;
    ct: any;
    tabLabel: any;
    active: any;
    page: any;
    match: any;
    firebase: any;
};
export declare function BasicStyles(props: any): any;
export declare function ApplyBasicStyles(target: React.ComponentClass<any>): void;
export declare function SimpleShouldUpdate(target: any): void;
export declare function SimpleShouldUpdate_Overridable(target: any): void;
export declare function Instant(target: any, name: any): void;
export declare function ShallowEquals(objA: any, objB: any): boolean;
export declare function ShallowChanged(objA: any, objB: any, ...propsToCompareMoreDeeply: string[]): boolean;
export declare function AddGlobalElement(html: any): void;
export declare function AddGlobalStyle(str: any): void;
/** Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
export declare function HasSealedProps(target: Object): void;
export declare function Sealed(target: Object, key: string): void;
