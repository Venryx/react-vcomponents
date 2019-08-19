import React from "react";
import {BaseComponent, ApplyBasicStyles, E} from "react-vextensions";

@ApplyBasicStyles
export class Column extends BaseComponent<{noShrink?, center?, style?} & React.HTMLAttributes<HTMLDivElement>, {}> {
	render() {
		let {noShrink, center, style, ...rest} = this.props;
		return <div {...rest} style={E({display: "flex", flexDirection: "column"}, noShrink && {flexShrink: 0}, center && {alignItems: "center"}, style)}/>
	}
}