import React from "react";
import { BaseComponent } from "react-vextensions";
export declare class TextArea extends BaseComponent<{
    enabled?: boolean;
    editable?: boolean;
    className?: string;
    style?: any;
    onChange?: (newVal: any, event: any) => void;
    delayChangeTillDefocus?: boolean;
    useEscape?: boolean;
    autoSize?: boolean;
    allowLineBreaks?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>, {
    editedValue: string;
}> {
    static defaultProps: {
        editable: boolean;
        allowLineBreaks: boolean;
    };
    render(): JSX.Element;
}
