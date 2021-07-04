import React from "react";
import {ApplyBasicStyles, BaseComponent} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed} from "../@Types.js";
import {E} from "../Internals/FromJSVE.js";

function Global(target) {
	Object.assign(window, {[target.name]: target});
}

export type SpanProps = {pre?} & HTMLProps_Fixed<"span">;
@Global
@ApplyBasicStyles
export class Span extends BaseComponent<SpanProps, {}> {
    render() {
		var {pre, style, title, ...rest} = this.props;
        return <span {...rest} title={title ?? undefined} style={E(style, pre && {whiteSpace: "pre"})}/>;
    }
}

export type PreProps = {allowWrap?: boolean} & HTMLProps_Fixed<"span">;
@Global
@ApplyBasicStyles
export class Pre extends BaseComponent<PreProps, {}> {
	render() {
		let {allowWrap, style, children, title, ...rest} = this.props;
		return <span {...rest} title={title ?? undefined} style={E({whiteSpace: allowWrap ? "pre-wrap" : "pre"}, style)}>{children}</span>;
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
	render() {
		let {shouldUpdate, style, title, ...rest} = this.props;
		return <div {...rest} title={title ?? undefined} style={style}/>;
	}
}