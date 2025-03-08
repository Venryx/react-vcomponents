import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
/** NOTE: You must pass a `DropDownTrigger` and `DropDownContent` as children of this one, and have that `DropDownTrigger` have a child with a working `onClick` property -- otherwise the DropDown will not open/trigger. */
export declare class DropDown extends BaseComponent<{
    className?: any;
    active?: boolean;
    onShow?: any;
    onHide?: any;
    autoHide?: boolean;
} & HTMLProps_Fixed<"div">, {
    active: boolean;
}> {
    static defaultState: {
        active: boolean;
        autoHide: boolean;
    };
    ComponentDidMount(): void;
    ComponentWillUnmount(): void;
    private OnWindowClick;
    private OnToggleClick;
    IsActive(): boolean;
    Show(): void;
    Hide(): void;
    render(): React.JSX.Element;
}
/** NOTE: The component you pass as a child of this one, *must* have a working `onClick` property -- otherwise the DropDown will not open/trigger. */
export declare class DropDownTrigger extends BaseComponent<{}, {}> {
    render(): React.JSX.Element[];
}
export declare class DropDownContent extends BaseComponent<{
    content?: () => React.JSX.Element;
    className?: any;
    style?: any;
} & Omit<HTMLProps_Fixed<"div">, "content">, {}> {
    render(): React.JSX.Element;
}
