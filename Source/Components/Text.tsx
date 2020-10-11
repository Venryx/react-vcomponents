import React from "react";
import {ApplyBasicStyles, BaseComponent} from "react-vextensions";
import {ReactChildrenAsText, E} from "../Internals/FromJSVE";

export type TextProps = {
	wrap?: boolean, style?,
} & React.HTMLAttributes<HTMLSpanElement>;

@ApplyBasicStyles
export class Text extends BaseComponent<TextProps, {}> {
	render() {
		let {wrap, style, children, ...rest} = this.props;

		let textStr = ReactChildrenAsText(children, "");
		let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
		// if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
		let applyPre = wrap == false || (wrap != true && textHasEdgeSpaces);

		return (
			<span {...rest}
					style={E(
						{display: "flex", alignItems: "center"},
						applyPre && {whiteSpace: "pre"},
						style
					)}>
				{children}
			</span>
		)
	}
}