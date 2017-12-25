/// <reference types="react" />
import React from "react";
import { Component } from "react";
import ShallowCompare from "react/lib/shallowCompare";
export { ShallowCompare };
import { BaseProps } from "./General";
export declare enum RenderSource {
    Mount = 0,
    PropChange = 1,
    SetState = 2,
    Update = 3,
}
export declare class BaseComponent<P, S> extends Component<P & BaseProps, S> {
    constructor(props: any);
    defaultState: Partial<S>;
    refs: any;
    readonly DOM: HTMLElement;
    readonly FlattenedChildren: React.ReactChild[];
    private GetPropsChanged_lastProps;
    GetPropsChanged(): any[];
    GetPropsChanged_Data(): string;
    private GetStateChanged_lastState;
    GetStateChanged(): any[];
    GetStateChanged_Data(): string;
    forceUpdate(_: () => "Do not call this. Call Update() instead."): void;
    Update(postUpdate?: any): void;
    Clear(postClear?: any): void;
    ClearThenUpdate(): void;
    /** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */
    UpdateAndReceive(props: any): () => void;
    setState(): "Do not call this. Call SetState() instead.";
    SetState(newState: Partial<S>, callback?: () => any, cancelIfStateSame?: boolean, deepCompare?: boolean): any[];
    changeListeners: any[];
    AddChangeListeners(host: any, ...funcs: any[]): void;
    RemoveChangeListeners(): void;
    RemoveChangeListenersFor(host: any): void;
    autoRemoveChangeListeners: boolean;
    ComponentWillMount(): void;
    ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void;
    componentWillMount(): void;
    ComponentDidMount(...args: any[]): void;
    ComponentDidMountOrUpdate(lastProps?: Readonly<P & BaseProps & {
        children?;
    }>, lastState?: S): void;
    ComponentDidMountOrUpdate_lastProps: Readonly<P & BaseProps & {
        children?;
    }>;
    ComponentDidMountOrUpdate_lastState: S;
    mounted: boolean;
    componentDidMount(...args: any[]): void;
    ComponentWillUnmount(): void;
    componentWillUnmount(): void;
    ComponentWillReceiveProps(newProps: any[]): void;
    componentWillReceiveProps(newProps: any): void;
    ComponentDidUpdate(...args: any[]): void;
    componentDidUpdate(...args: any[]): void;
    lastRender_source: RenderSource;
    private CallPostRender();
    PreRender(): void;
    PostRender(source?: RenderSource): void;
}
