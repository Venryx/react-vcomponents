/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export default class CheckBox extends BaseComponent<{
    text?;
    title?;
    checked: boolean;
    indeterminate?: boolean;
    enabled?: boolean;
    style?;
    labelStyle?;
    internalChanging?: boolean;
    onChange?: (val: boolean, e) => void;
}, {
    editedValue: boolean;
}> {
    static lastID: number;
    constructor(props: any);
    id: any;
    input: HTMLInputElement;
    render(): JSX.Element;
    PostRender(): void;
    readonly Checked: boolean;
}