import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type ButtonProps = {
    enabled?: boolean;
    text?: string | JSX.Element;
    title?: string;
    className?: string;
    style?: any;
    size?: number;
    width?: number;
    height?: number;
    iconSize?: number;
    iconPath?: string;
    useOpacityForHover?: boolean;
    hasCheckbox?: boolean;
    checked?: boolean;
    checkboxStyle?: any;
    checkboxLabelStyle?: any;
    onCheckedChanged?: any;
    onLeftClick?: any;
    onDirectClick?: any;
} & React.HTMLAttributes<HTMLDivElement>;
export declare class Button extends BaseComponent<ButtonProps, {}> {
    static defaultProps: {
        enabled: boolean;
    };
    render(): JSX.Element;
    OnClick(e: any): void;
}
