/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
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
    render(): JSX.Element;
}
export declare class DropDownTrigger extends BaseComponent<{}, {}> {
    render(): JSX.Element[];
}
export declare class DropDownContent extends BaseComponent<{
    content?: () => JSX.Element;
    className?: any;
    style?: any;
} & HTMLProps_Fixed<"div">, {}> {
    render(): JSX.Element;
}
