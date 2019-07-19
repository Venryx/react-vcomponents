import React from "react";
import {ApplyBasicStyles, BaseComponent, E} from "react-vextensions";

@ApplyBasicStyles
export class Text extends BaseComponent<{wrap?, style?} & React.HTMLProps<HTMLSpanElement>, {}> {
	render() {
		let {wrap, style, ...rest} = this.props;
		return <span {...rest} style={E({display: "flex", alignItems: "center"}, !wrap && {whiteSpace: "pre"}, style)}/>
	}
}