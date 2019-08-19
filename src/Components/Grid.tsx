import React from "react";
import {BaseComponent, ApplyBasicStyles, E, AddGlobalStyle} from "react-vextensions";
import classnames from "classnames";

AddGlobalStyle(`
.Grid_WithSingleItem > * { grid-area: 1/1/1/1; }
`);

@ApplyBasicStyles
export class Grid extends BaseComponent<{single?, centerY?, style?} & React.HTMLAttributes<HTMLDivElement>, {}> {
	render() {
		let {single, centerY, className, style, ...rest} = this.props;
		return <div {...rest} className={classnames(className, single && "Grid_WithSingleItem")} style={E({display: "grid"}, centerY && {alignItems: "center"}, style)}/>
	}
}