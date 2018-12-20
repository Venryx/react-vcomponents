import { BaseComponent } from "react-vextensions";
export declare class Spinner extends BaseComponent<{
    step?: any;
    min?: any;
    max?: any;
    value?: any;
    enabled?: any;
    title?: any;
    style?: any;
    onChange: any;
    onFocus?: any;
}, {}> {
    static defaultProps: {
        step: number;
        min: number;
        max: number;
        value: number;
        enabled: boolean;
    };
    root: HTMLInputElement;
    render(): JSX.Element;
    value: any;
    OnChange(e: any): void;
}
