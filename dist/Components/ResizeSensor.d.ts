import { BaseComponent } from "react-vextensions";
export declare class ResizeSensor extends BaseComponent<{
    onResize: (width: number, height: number) => void;
    callForMount?: boolean;
}, {}> {
    static defaultProps: {
        callForMount: boolean;
    };
    iframe: HTMLIFrameElement;
    render(): JSX.Element;
    ComponentDidMount(): void;
    ComponentWillUnmount(): void;
    NotifyResized(): void;
}
