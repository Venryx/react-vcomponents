import React from "react";
import { BaseComponent } from "react-vextensions";
import { FixHTMLProps, n } from "../@Types.js";
export type SpinnerProps = {
    enabled?: boolean;
    autoSize?: boolean;
    instant?: boolean;
    useEscape?: boolean;
    enforceRange?: boolean;
    validator?: (value: number) => boolean | string;
    onChange?: (newValue: number, event: React.ChangeEvent<HTMLInputElement>) => any;
} & Omit<FixHTMLProps<React.InputHTMLAttributes<HTMLInputElement>>, "onChange">;
export declare class Spinner extends BaseComponent<SpinnerProps, {
    editedValue: number | n;
}> {
    static defaultProps: {
        step: string;
        value: number;
        min: number;
        max: number;
        enabled: boolean;
        useEscape: boolean;
    };
    ComponentDidMountOrUpdate(): void;
    ValidateValue(value: number): void;
    root: HTMLInputElement | n;
    render(): React.JSX.Element;
}
