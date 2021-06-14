import React from "react";
import {ApplyBasicStyles, BaseComponent} from "react-vextensions";
import {E} from "../Internals/FromJSVE.js";

function Global(target) {
	Object.assign(window, {[target.name]: target});
}

export type SpanProps = {pre?} & React.HTMLAttributes<HTMLSpanElement>;
@Global
@ApplyBasicStyles
export class Span extends BaseComponent<SpanProps, {}> {
    render() {
		var {pre, style, ...rest} = this.props;
        return <span {...rest} style={E(style, pre && {whiteSpace: "pre"})}/>;
    }
}

export type PreProps = {allowWrap?: boolean} & React.HTMLAttributes<HTMLSpanElement>;
@Global
@ApplyBasicStyles
export class Pre extends BaseComponent<PreProps, {}> {
	render() {
		let {allowWrap, style, children, ...rest} = this.props;
		return <span {...rest} style={E({whiteSpace: allowWrap ? "pre-wrap" : "pre"}, style)}>{children}</span>;
	}
}

export type DivProps = {shouldUpdate?} & React.HTMLAttributes<HTMLDivElement>;
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
		let {shouldUpdate, style, ...rest} = this.props;
		return <div {...rest} style={style}/>;
	}
}