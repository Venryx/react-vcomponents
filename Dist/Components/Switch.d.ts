/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
export declare class Switch extends BaseComponent<{
    preferLater?: boolean;
}, {}> {
    static defaultProps: {
        preferLater: boolean;
    };
    render(): JSX.Element;
}
