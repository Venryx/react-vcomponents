/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import React from "react";
export declare class DropDown extends BaseComponent<{
    className?;
    onShow?;
    onHide?;
} & React.HTMLProps<HTMLDivElement>, {
    active: boolean;
}> {
    ComponentDidMount(): void;
    ComponentWillUnmount(): void;
    constructor(props: any);
    isActive(): boolean;
    hide(): void;
    show(): void;
    _onWindowClick(event: any): void;
    _onToggleClick(event: any): void;
    render(): JSX.Element;
}
export declare class DropDownTrigger extends BaseComponent<{
    className?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
export declare class DropDownContent extends BaseComponent<{
    className?;
    style?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
