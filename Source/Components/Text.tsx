import React from "react";
import {ApplyBasicStyles, BaseComponent, cssHelper} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed} from "../@Types.js";
import {ReactChildrenAsText, E} from "../Internals/FromJSVE.js";

export type TextProps = {
	keepWhitespace?: boolean, wrap?: boolean, style?,
} & HTMLProps_Fixed<"span">;

@ApplyBasicStyles
export class Text extends BaseComponent<TextProps, {}> {
	render() {
		let {keepWhitespace, wrap, style, children, title, ...rest} = this.props;

		let textStr = ReactChildrenAsText(children, "");
		let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
		// if text starts/ends with a space, keep whitespace by default
		keepWhitespace ??= textHasEdgeSpaces;
		wrap ??= true;

		const whiteSpaceStyle =
			keepWhitespace && wrap ? {whiteSpace: "pre-wrap"} as const :
			keepWhitespace ? {whiteSpace: "pre"} as const :
			wrap ? {} : // default behavior
			{whiteSpace: "nowrap"} as const;

		const {css} = cssHelper(this);
		return (
			<span {...rest} title={title ?? undefined}
					style={css(
						{display: "flex", alignItems: "center"},
						whiteSpaceStyle,
						style
					)}>
				{children}
			</span>
		)
	}
}