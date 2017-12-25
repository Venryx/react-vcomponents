/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export default class Column extends BaseComponent<{
    style?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
