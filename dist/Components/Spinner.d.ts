/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export default class Spinner extends BaseComponent<{
    step?;
    min?;
    max?;
    value?;
    enabled?;
    title?;
    style?;
    onChange;
    onFocus?;
}, {}> {
    static defaultProps: {
        step: number;
        min: number;
        max: number;
        value: number;
        enabled: boolean;
    };
    render(): JSX.Element;
    value: any;
    OnChange(e: any): void;
}
