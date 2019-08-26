import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type SpinnerProps = {
    enabled?: boolean;
    autoSize?: boolean;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    onChange?: (newValue: number, event: React.ChangeEvent<HTMLInputElement>) => any;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare class Spinner extends BaseComponent<SpinnerProps, {
    editedValue: number;
}> {
    static defaultProps: {
        step: number;
        min: number;
        max: number;
        value: number;
        enabled: boolean;
        useEscape: boolean;
    };
    root: HTMLInputElement;
    render(): JSX.Element;
}
