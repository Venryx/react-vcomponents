import React from "react";
import {BaseComponent, ApplyBasicStyles, E} from "react-vextensions";

@ApplyBasicStyles
export class Column extends BaseComponent<{center?, style?} & React.HTMLProps<HTMLDivElement>, {}> {
	render() {
		let {center, style, ...rest} = this.props;
		return <div {...rest} style={E({display: "flex", flexDirection: "column", flexShrink: 0}, center && {alignItems: "center"}, style)}/>
	}
}