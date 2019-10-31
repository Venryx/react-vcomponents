import { BaseComponent } from "react-vextensions";
import React from "react";
declare const DropDown_base: new (..._: any[]) => BaseComponent<{
    className?: any;
    onShow?: any;
    onHide?: any;
    active?: boolean;
} & React.HTMLAttributes<HTMLDivElement>, {
    active: boolean;
}, unknown>;
export declare class DropDown extends DropDown_base {
    ComponentDidMount(): void;
    ComponentWillUnmount(): void;
    private OnWindowClick;
    private OnToggleClick;
    IsActive(): boolean;
    Show(): void;
    Hide(): void;
    render(): JSX.Element;
}
export declare class DropDownTrigger extends BaseComponent<{
    className?: any;
} & React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
export declare class DropDownContent extends BaseComponent<{
    className?: any;
    style?: any;
} & React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
export {};
