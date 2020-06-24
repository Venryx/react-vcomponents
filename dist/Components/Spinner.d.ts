import React from "react";
import { BaseComponent } from "react-vextensions";
export declare type SpinnerProps = {
    enabled?: boolean;
    autoSize?: boolean;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    enforceRange?: boolean;
    validator?: (value: number) => boolean | string;
    onChange?: (newValue: number, event: React.ChangeEvent<HTMLInputElement>) => any;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
export declare class Spinner extends BaseComponent<SpinnerProps, {
    editedValue: number | null;
}> {
    static defaultProps: {
        step: number;
        min: number;
        max: number;
        value: number;
        enabled: boolean;
        useEscape: boolean;
    };
    ComponentDidMountOrUpdate(): void;
    ValidateValue(value: number): void;
    root: HTMLInputElement | null;
    render(): JSX.Element;
}
