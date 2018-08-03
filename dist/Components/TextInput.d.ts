import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class TextInput extends BaseComponent<{
    value: string;
    enabled?: boolean;
    onChange?: (newVal: any, event: any) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    style?: any;
} & React.HTMLProps<HTMLInputElement>, {
    editedValue: string;
}> {
    static defaultProps: {
        type: string;
    };
    render(): JSX.Element;
    GetValue(): any;
}
