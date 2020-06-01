/*import React from "react";
import {BaseComponent} from "react-vextensions";

export class ResizeSensor extends BaseComponent<{onResize: (width: number, height: number)=>void, callForMount?: boolean}, {}> {
	static defaultProps = {callForMount: true};
	
	iframe: HTMLIFrameElement;
  	render() {
		return (
			<iframe ref={c=>this.iframe = c} style={{
				height: '100%',
				width: '100%',
				border: 'none',
				background: 'transparent',
				position: 'absolute',
				zIndex: -1,
				top: 0,
				left: 0,
				pointerEvents: "none",
			}}/>
		);
	}

	ComponentDidMount() {
		let {callForMount} = this.props;
		this.iframe.contentWindow.addEventListener("resize", ()=>this.NotifyResized());
		if (callForMount) {
			setTimeout(()=>this.NotifyResized());
		}
	}
	ComponentWillUnmount() {
		let {onResize} = this.props;
		this.iframe.contentWindow.removeEventListener("resize", ()=>this.NotifyResized());
	}

	NotifyResized() {
		let {onResize} = this.props;
		onResize(this.DOM.clientWidth, this.DOM.clientHeight);
	}
}*/