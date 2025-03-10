import React from "react";
import {BaseComponent, ApplyBasicStyles, cssHelper} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed, n} from "../@Types.js";
import {E} from "../Internals/FromJSVE.js";

/*export class Row extends BaseComponent<any, any> {
	render() {
		var {style, height, children, ...otherProps} = this.props;
		height = height != null ? height : (style||{}).height;
		return (
			<div {...otherProps} style={css(BasicStyles(this.props), style,
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
			<div className={"row3 clear " + (className || "")} style={css(height != null && {height}, rowStyle)}>
				<div style={css({float: "left", width: "50%"}, leftStyle)}>
					{children[0]}
				</div>
				<div style={css({float: "right", width: "50%"}, rightStyle)}>
					{children[1]}
				</div>
			</div>
        );
    }
}*/

export type RowProps = {noShrink?, center?, style?} & HTMLProps_Fixed<"div">;
@ApplyBasicStyles
export class Row extends BaseComponent<RowProps, {}> {
	root: HTMLDivElement|n;
	render() {
		let {noShrink, center, style, title, ...rest} = this.props;
		const {css} = cssHelper(this);
		return <div {...rest} ref={c=>void(this.root = c)} title={title ?? undefined} style={css(
			{display: "flex"},
			noShrink && {flexShrink: 0},
			center && {alignItems: "center"},
			style,
		)}/>
	}
}

export type RowLRProps = {splitAt?: number | string, height?: number, className?: string, style?, leftStyle?, rightStyle?} & HTMLProps_Fixed<"div">;
@ApplyBasicStyles
export class RowLR extends BaseComponent<RowLRProps, {}> {
	static defaultProps = {splitAt: "50%"};
	render() {
		var {splitAt, height, className, style, leftStyle, rightStyle, children, title, ...rest} = this.props;
		//Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");

		// if a child has "just-wrapper" tag, take out the wrapper and use its children directly (temp helper for React <16)
		/*if (children[1].props.className && children[1].props.className == "just-wrapper") {
			children[1] = children[1].props.children;
		}*/

		let childrenList = children as any[];
		const {css} = cssHelper(this);
		return (
			<div {...rest} title={title ?? undefined} style={css({display: "flex", flexShrink: 0}, style)}>
				<Row center style={css(
					{width: typeof splitAt == "string" ? splitAt + "%" : splitAt},
					leftStyle
				)}>
					{children![0]}
				</Row>
				<Row center style={css(
					{width: typeof splitAt == "string" ? (100 - parseInt(splitAt.slice(0, -1))) + "%" : `calc(100% - ${splitAt}px)`},
					rightStyle
				)}>
					{childrenList.length == 2 && childrenList[1]}
					{childrenList.length > 2 && childrenList.slice(1)}
				</Row>
			</div>
		);
	}
}