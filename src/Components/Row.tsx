import React from "react";
import {BaseComponent, ApplyBasicStyles, E} from "react-vextensions";
import {Assert} from "../General";

/*export class Row extends BaseComponent<any, any> {
	render() {
		var {style, height, children, ...otherProps} = this.props;
		height = height != null ? height : (style||{}).height;
		return (
			<div {...otherProps} style={E(BasicStyles(this.props), style,
					//height != null ? {height} : {flex: 1})}>
					height != null && {height})}>
				{children}
			</div>
		);
	}
}
@ApplyBasicStyles
export class RowLR extends BaseComponent<{height?, className?, rowStyle?, leftStyle?, rightStyle?}, {}> {
    render() {
		var {height, className, rowStyle, leftStyle, rightStyle, children} = this.props;
        Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
		return (
			<div className={"row3 clear " + (className || "")} style={E(height != null && {height}, rowStyle)}>
				<div style={E({float: "left", width: "50%"}, leftStyle)}>
					{children[0]}
				</div>
				<div style={E({float: "right", width: "50%"}, rightStyle)}>
					{children[1]}
				</div>
			</div>
        );
    }
}*/

@ApplyBasicStyles
export class Row extends BaseComponent<{style?} & React.HTMLProps<HTMLDivElement>, {}> {
	render() {
		let {style, ...rest} = this.props;
		return <div {...rest} style={E({display: "flex", alignItems: "center"}, style)}/>
	}
}
@ApplyBasicStyles
export class RowLR extends BaseComponent<{splitAt?: number | string, height?: number, className?: string, style?, leftStyle?, rightStyle?} & React.HTMLProps<HTMLDivElement>, {}> {
	static defaultProps = {splitAt: "50%"};
	render() {
		var {splitAt, height, className, style, leftStyle, rightStyle, children, ...rest} = this.props;
		Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");

		// if a child has "just-wrapper" tag, take out the wrapper and use its children directly (temp helper for React <16)
		/*if (children[1].props.className && children[1].props.className == "just-wrapper") {
			children[1] = children[1].props.children;
		}*/

		return (
			<div {...rest} style={E({display: "flex", flexShrink: 0}, style)}>
				<div style={E(
					{display: "flex", alignItems: "center"},
					{width: typeof splitAt == "string" ? splitAt + "%" : splitAt},
					leftStyle
				)}>
					{children[0]}
				</div>
				<div style={E(
					{display: "flex", alignItems: "center"},
					{width: typeof splitAt == "string" ? (100 - parseInt(splitAt.slice(0, -1))) + "%" : `calc(100% - ${splitAt}px)`},
					rightStyle
				)}>
					{children[1]}
				</div>
			</div>
		);
	}
}