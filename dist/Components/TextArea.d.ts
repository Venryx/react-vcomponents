/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export declare class TextArea extends BaseComponent<{
    value?;
    defaultValue?;
    editable?;
    className?;
    style?;
    onChange?: (newVal, event) => void;
    delayChangeTillDefocus?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>, {
    editedValue: string;
}> {
    static defaultProps: {
        editable: boolean;
    };
    render(): JSX.Element;
}
export declare class TextArea_AutoSize extends BaseComponent<{
    enabled?: boolean;
    style?;
    onChange?;
} & React.HTMLProps<HTMLTextAreaElement>, {}> {
    render(): JSX.Element;
}
