import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed} from "../@Types.js";
import {E} from "../Internals/FromJSVE.js";

export type ColumnProps = {noShrink?, center?, style?} & HTMLProps_Fixed<"div">;
@ApplyBasicStyles
export class Column extends BaseComponent<ColumnProps, {}> {
	render() {
		let {noShrink, center, style, title, ...rest} = this.props;
		return <div {...rest} title={title ?? undefined} style={E({display: "flex", flexDirection: "column"}, noShrink && {flexShrink: 0}, center && {alignItems: "center"}, style)}/>
	}
}