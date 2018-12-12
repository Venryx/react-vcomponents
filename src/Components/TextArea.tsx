import React from "react";
import {BaseComponent, E} from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";
import * as keycode from "keycode";

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
		whiteSpace: "pre",
		wordWrap: "normal",
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

export class TextArea extends BaseComponent
		<{
			enabled?: boolean, editable?: boolean, className?: string, style?, onChange?: (newVal, event)=>void,
			delayChangeTillDefocus?: boolean, useEscape?: boolean, autoSize?: boolean, allowLineBreaks?: boolean,
		} & React.HTMLProps<HTMLTextAreaElement>,
		{editedValue: string}> {
	static defaultProps = {editable: true, allowLineBreaks: true};
	
	render() {
		var {value, defaultValue, pattern, enabled, editable, className, style, onChange, delayChangeTillDefocus, useEscape, autoSize, allowLineBreaks, onKeyDown, ...rest} = this.props;
		var {editedValue} = this.state;

		// if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content
		if (defaultValue === undefined && value == null) value = "";

		let Comp = autoSize ? TextAreaAutoSize : "textarea";

		return <Comp {...rest} ref="root" disabled={enabled == false} readOnly={!editable} className={"simpleText selectable " + className}
			style={E(styles.root, autoSize && {resize: "none", overflow: "hidden"}, style)}
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
				var newVal = e.target["value"];
				if (newVal == value) return; // if no text change, ignore event

				if (delayChangeTillDefocus && onChange) {
					onChange(newVal, e);
					this.SetState({editedValue: null});
				}
			}}
			onKeyDown={e=> {
				if (useEscape && e.keyCode == keycode.codes.esc) return void this.SetState({editedValue: null});
				if (onKeyDown) return onKeyDown(e);
			}}/>;
	}
}