import { BaseComponent } from "react-vextensions";
import React from "react";
export declare class DropDown extends BaseComponent<{
    className?: any;
    onShow?: any;
    onHide?: any;
    active?: boolean;
} & React.HTMLAttributes<HTMLDivElement>, {
    active: boolean;
}> {
    static defaultState: {
        active: boolean;
    };
    ComponentDidMount(): void;
    ComponentWillUnmount(): void;
    private OnWindowClick;
    private OnToggleClick;
    IsActive(): boolean;
    Show(): void;
    Hide(): void;
    render(): JSX.Element;
}
export declare class DropDownTrigger extends BaseComponent<{}, {}> {
    render(): JSX.Element[];
}
export declare class DropDownContent extends BaseComponent<{
    className?: any;
    style?: any;
} & React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
