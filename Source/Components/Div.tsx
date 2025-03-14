import React from "react";
import {ApplyBasicStyles, BaseComponent, cssHelper} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed, n} from "../@Types.js";
import {E} from "../Internals/FromJSVE.js";

function Global(target) {
	if (typeof window == "undefined") return;
	Object.assign(window, {[target.name]: target});
}

export type SpanProps = {pre?} & HTMLProps_Fixed<"span">;
@Global
@ApplyBasicStyles
export class Span extends BaseComponent<SpanProps, {}> {
    render() {
		const {css} = cssHelper(this);
		var {pre, style, title, ...rest} = this.props;
        return <span {...rest} title={title ?? undefined} style={css(style, pre && {whiteSpace: "pre"})}/>;
	}
}

export type PreProps = {allowWrap?: boolean} & HTMLProps_Fixed<"span">;
@Global
@ApplyBasicStyles
export class Pre extends BaseComponent<PreProps, {}> {
	render() {
		let {allowWrap, style, children, title, ...rest} = this.props;
		const {css} = cssHelper(this);
		return <span {...rest} title={title ?? undefined} style={css({whiteSpace: allowWrap ? "pre-wrap" : "pre"}, style)}>{children}</span>;
	}
}

export type DivProps = {shouldUpdate?} & HTMLProps_Fixed<"div">;
@Global
//@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating
@ApplyBasicStyles
export class Div extends BaseComponent<DivProps, {}> {
	shouldComponentUpdate(nextProps, nextState) {
		let {shouldUpdate} = this.props;
		return shouldUpdate ? shouldUpdate(nextProps, nextState) : true;
		//return (shouldUpdate && shouldUpdate(nextProps, nextState)) || ShallowCompare(this, nextProps, nextState);
	}
	root: HTMLDivElement|n;
	render() {
		let {shouldUpdate, style, title, ...rest} = this.props;
		return <div {...rest} ref={c=>void(this.root = c)} title={title ?? undefined} style={style}/>;
	}
}