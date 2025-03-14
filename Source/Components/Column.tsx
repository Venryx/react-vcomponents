import React from "react";
import {BaseComponent, ApplyBasicStyles, cssHelper} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed, n} from "../@Types.js";
import {E} from "../Internals/FromJSVE.js";

export type ColumnProps = {noShrink?, center?, style?} & HTMLProps_Fixed<"div">;
@ApplyBasicStyles
export class Column extends BaseComponent<ColumnProps, {}> {
	root: HTMLDivElement|n;
	render() {
		let {noShrink, center, style, title, ...rest} = this.props;
		const {css} = cssHelper(this);
		return <div {...rest} ref={c=>void(this.root = c)} title={title ?? undefined} style={css(
			{display: "flex", flexDirection: "column"},
			noShrink && {flexShrink: 0},
			center && {alignItems: "center"},
			style,
		)}/>
	}
}