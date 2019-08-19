import React from "react";
import {ApplyBasicStyles, BaseComponent, E} from "react-vextensions";

function Global(target) {
	Object.assign(window, {[target.name]: target});
}

@Global
@ApplyBasicStyles
export class Span extends BaseComponent<{pre?} & React.HTMLAttributes<HTMLSpanElement>, {}> {
    render() {
		var {pre, style, ...rest} = this.props;
        return <span {...rest} style={E(style, pre && {whiteSpace: "pre"})}/>;
    }
}

@Global
@ApplyBasicStyles
export class Pre extends BaseComponent<{allowWrap?: boolean} & React.HTMLAttributes<HTMLSpanElement>, {}> {
	render() {
		let {allowWrap, style, children, ...rest} = this.props;
		return <span {...rest} style={E({whiteSpace: allowWrap ? "pre-wrap" : "pre"}, style)}>{children}</span>;
	}
}

@Global
//@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating
@ApplyBasicStyles
export class Div extends BaseComponent<{shouldUpdate?} & React.HTMLAttributes<HTMLDivElement>, {}> {
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