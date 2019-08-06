import React from "react";
import {ApplyBasicStyles, BaseComponent, E} from "react-vextensions";

function IsArrayOfStrings(obj): obj is string[] { return obj instanceof Array && obj.every(a=>IsString(a)); }
function IsString(obj): obj is string { return typeof obj == "string"; }

@ApplyBasicStyles
export class Text extends BaseComponent<{wrap?, style?} & React.HTMLProps<HTMLSpanElement>, {}> {
	render() {
		let {wrap, style, children, ...rest} = this.props;
		let text = IsString(children) ? children : IsArrayOfStrings(children) ? children.join("") : "";
		let textHasEdgeSpaces = text.startsWith(" ") || text.endsWith(" ");
		
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