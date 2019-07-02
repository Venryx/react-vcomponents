import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type SpinnerProps = {
    step?: any;
    min?: any;
    max?: any;
    value?: any;
    enabled?: any;
    title?: any;
    style?: any;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    onChange: any;
} & React.HTMLProps<HTMLInputElement>;
export declare class Spinner extends BaseComponent<SpinnerProps, {
    editedValue: number;
}> {
    static defaultProps: {
        step: number;
        min: number;
        max: number;
        value: number;
        enabled: boolean;
    };
    root: HTMLInputElement;
    render(): JSX.Element;
}
