/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export declare type ButtonProps = {
    enabled?: boolean;
    text?: string | JSX.Element;
    title?: string;
    className?: string;
    style?;
    size?: number;
    width?: number;
    height?: number;
    iconSize?: number;
    iconPath?: string;
    useOpacityForHover?: boolean;
    hasCheckbox?: boolean;
    checked?: boolean;
    checkboxStyle?;
    checkboxLabelStyle?;
    onCheckedChanged?;
    onClick?;
    onLeftClick?;
    onDirectClick?;
} & React.HTMLProps<HTMLDivElement>;
export declare class Button extends BaseComponent<ButtonProps, {}> {
    static defaultProps: {
        enabled: boolean;
    };
    render(): JSX.Element;
    OnClick(e: any): void;
}
