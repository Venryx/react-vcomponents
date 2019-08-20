import React from "react";
import {BaseComponent, E, AddGlobalStyle, ApplyBasicStyles} from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";
import * as keycode from "keycode";
import classnames from "classnames";

var styles = {
	root: {
		margin: 0,
		/*border: "1px solid #A9A9A9",*/
		padding: "3 5",
		border: "none",
		//background: "url(/Main/Packages/Images/Tiling/Menu/Menu.png)",
		//color: "#888",
		//cursor: "text",
		resize: "none",

		display: "inline-block",
		boxSizing: "border-box",
		//whiteSpace: "pre",
		overflowWrap: "normal",
		width: "100%",
		//height: "100%",
		/*overflow: "auto",*/
	},
	root_disabled: {
		/*background: "white",*/
		opacity: .7,
		cursor: "default",
	}
};

AddGlobalStyle(`
.autoSize_minHeight {
	height: unset !important;
}
`);

// Note: Where possible, use something like "React.TextareaHTMLAttributes<HTMLTextAreaElement>". For the rest (eg. HTMLDivElement), use eg. "React.HTMLAttributes<HTMLDivElement>"

@ApplyBasicStyles
export class TextArea extends BaseComponent
		<{
			enabled?: boolean, editable?: boolean, pattern?: string, onChange?: (newVal: string, event: React.ChangeEvent<HTMLTextAreaElement>)=>void,
			delayChangeTillDefocus?: boolean, useEscape?: boolean, autoSize?: boolean, autoSize_minHeight?: boolean, allowLineBreaks?: boolean,
		} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "disabled" | "readOnly">,
		{editedValue: string, minHeight: number}> {
	static defaultProps = {editable: true, allowLineBreaks: true};
	
	root: TextAreaAutoSize | HTMLTextAreaElement;
	render() {
		var {value, defaultValue, enabled, editable, className, style, pattern, onChange, delayChangeTillDefocus, useEscape, autoSize, autoSize_minHeight, allowLineBreaks, onKeyDown, ...rest} = this.props;
		var {editedValue, minHeight} = this.state;

		// if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content
		if (defaultValue === undefined && value == null) value = "";

		//let Comp = autoSize ? TextAreaAutoSize : "textarea";
		//let Comp: React.HTMLFactory<HTMLTextAreaElement> = autoSize ? TextAreaAutoSize : "textarea";
		let Comp: React.DetailedHTMLFactory<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> = autoSize ? TextAreaAutoSize : "textarea";

		return <Comp {...rest} ref={c=>this.root = c} disabled={enabled == false} readOnly={!editable} className={classnames("simpleText selectable", className, autoSize_minHeight && "autoSize_minHeight")}
			style={E(
				styles.root,
				autoSize && {
					resize: "none",
					overflow: "hidden", // this is done to prevent measuring issues?
					//overflowWrap: null,
				},
				autoSize_minHeight && minHeight != null && {minHeight},
				style,
			)}
			{...autoSize_minHeight && {onHeightChange: height=> {
				if (autoSize_minHeight) {
					this.SetState({minHeight: height});
				}
			}}}
			value={editedValue != null ? editedValue : value} defaultValue={defaultValue} 
			onChange={e=> {
				var newVal = e.target.value;
				if (!allowLineBreaks) newVal = newVal.replace(/[\r\n]/g, "");
				if (newVal == editedValue) return; // if no text change, ignore event

				if (pattern) {
					let valid = newVal.match(pattern) != null;
					if (this.DOM && this.DOM["setCustomValidity"]) {
						this.DOM["setCustomValidity"](valid ? "" : "Please match the requested format.");
					}
				}

				if (delayChangeTillDefocus) {
					this.SetState({editedValue: newVal});
				} else {
					onChange(newVal, e);
					this.SetState({editedValue: null});
				}
			}}
			onBlur={e=> {
				var newVal = e.target.value as string;
				if (newVal == value) return; // if no text change, ignore event

				if (delayChangeTillDefocus) {
					if (onChange) onChange(newVal, e);
					this.SetState({editedValue: null});
				}
			}}
			onKeyDown={e=> {
				if (useEscape && e.keyCode == keycode.codes.esc) return void this.SetState({editedValue: null});
				if (onKeyDown) return onKeyDown(e);
			}}/>;
	}
}