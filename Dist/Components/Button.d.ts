import React from "react";
import { BaseComponent } from "react-vextensions";
import { FixHTMLProps } from "../@Types.js";
export declare const Button_styles: {
    root: {
        display: string;
        alignItems: string;
        justifyContent: string;
        backgroundColor: string;
        backgroundRepeat: string;
        borderRadius: number;
        border: string;
        color: string;
        fontSize: number;
        textAlign: string;
        cursor: string;
        ":hover": {
            backgroundColor: string;
        };
    };
    root_opacityHover: {
        opacity: number;
        ":hover": {
            opacity: number;
        };
    };
    root_hasCheckbox: {
        paddingTop: number;
        verticalAlign: number;
    };
    root_disabled: {
        opacity: number;
        cursor: string;
    };
    root_override: {};
    checkbox: {
        marginLeft: number;
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
    faIcon?: string;
    hasCheckbox?: boolean;
    checked?: boolean;
    checkboxStyle?: any;
    checkboxLabelStyle?: any;
    onCheckedChanged?: any;
    onLeftClick?: any;
    onDirectClick?: any;
} & FixHTMLProps<React.HTMLAttributes<HTMLDivElement>>;
export declare class Button extends BaseComponent<ButtonProps, {}> {
    static defaultProps: {
        enabled: boolean;
    };
    render(): JSX.Element;
}
