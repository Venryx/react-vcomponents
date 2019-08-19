import React from "react";
import {BaseComponent, ApplyBasicStyles, E} from "react-vextensions";

export type ColumnProps = {noShrink?, center?, style?} & React.HTMLAttributes<HTMLDivElement>;
@ApplyBasicStyles
export class Column extends BaseComponent<ColumnProps, {}> {
	render() {
		let {noShrink, center, style, ...rest} = this.props;
		return <div {...rest} style={E({display: "flex", flexDirection: "column"}, noShrink && {flexShrink: 0}, center && {alignItems: "center"}, style)}/>
	}
}