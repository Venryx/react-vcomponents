import React from "react";
import {BaseComponent, ApplyBasicStyles, AddGlobalStyle} from "react-vextensions";
import classnames from "classnames";
import {E} from "../Internals/FromJSVE.js";
import {FixHTMLProps, HTMLProps_Fixed} from "../@Types.js";

AddGlobalStyle(`
.Grid_WithSingleItem > * { grid-area: 1/1/1/1; }
`);

@ApplyBasicStyles
export class Grid extends BaseComponent<{single?, centerY?, style?} & HTMLProps_Fixed<"div">, {}> {
	render() {
		let {single, centerY, className, style, title, ...rest} = this.props;
		return <div {...rest} title={title ?? undefined} className={classnames(className, single && "Grid_WithSingleItem")} style={E({display: "grid"}, centerY && {alignItems: "center"}, style)}/>
	}
}