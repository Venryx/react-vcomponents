import React from "react";
import { BaseComponent } from "react-vextensions";
import { HTMLProps_Fixed } from "../@Types.js";
export declare const Button_styles: {
    readonly root: {
        readonly display: "inline-flex";
        readonly alignItems: "center";
        readonly justifyContent: "center";
        readonly backgroundColor: "rgba(90,100,110,.6)";
        readonly backgroundRepeat: "no-repeat";
        readonly borderRadius: 5;
        readonly border: "1px solid rgba(210,210,230,.12)";
        readonly color: "#AAA";
        readonly fontSize: 14;
        readonly textAlign: "center";
        readonly cursor: "pointer";
        readonly ":hover": {
            readonly backgroundColor: "rgba(90,100,110,.8)";
        };
    };
    readonly root_opacityHover: {
        readonly opacity: 0.6;
        readonly ":hover": {
            readonly opacity: 1;
        };
    };
    readonly root_hasCheckbox: {
        readonly paddingTop: 4;
        readonly verticalAlign: 1;
    };
    readonly root_disabled: {
        readonly opacity: 0.5;
        readonly cursor: "default";
    };
    readonly root_override: {};
    readonly checkbox: {
        readonly marginLeft: -6;
    };
};
export declare type ButtonProps = {
    enabled?: boolean;
    text?: string | JSX.Element;
    className?: string;
    style?: any;
    size?: number;
    width?: number;
    height?: number;
    useOpacityForHover?: boolean;
    iconPath?: string;
    iconSize?: number;
    mdIcon?: string;
    faIcon?: string;
    hasCheckbox?: boolean;
    checked?: boolean;
    checkboxStyle?: any;
    checkboxLabelStyle?: any;
    onCheckedChanged?: any;
    onLeftClick?: any;
    onDirectClick?: any;
} & HTMLProps_Fixed<"div">;
export declare class Button extends BaseComponent<ButtonProps, {}> {
    static defaultProps: {
        enabled: boolean;
    };
    render(): React.JSX.Element;
}
