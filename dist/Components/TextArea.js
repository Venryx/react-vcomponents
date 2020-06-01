var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { BaseComponent, AddGlobalStyle, ApplyBasicStyles } from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";
import * as keycode from "keycode";
import classnames from "classnames";
import { E } from "../Internals/FromJSVE";
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
        //overflowWrap: "normal", // removed; else text can overflow that cannot be scrolled to
        width: "100%",
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
let TextArea = class TextArea extends BaseComponent {
    render() {
        var _a = this.props, { value, defaultValue, enabled, editable, className, style, pattern, onChange, delayChangeTillDefocus, useEscape, autoSize, autoSize_minHeight, allowLineBreaks, onKeyDown } = _a, rest = __rest(_a, ["value", "defaultValue", "enabled", "editable", "className", "style", "pattern", "onChange", "delayChangeTillDefocus", "useEscape", "autoSize", "autoSize_minHeight", "allowLineBreaks", "onKeyDown"]);
        var { editedValue, minHeight } = this.state;
        // if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content
        if (defaultValue === undefined && value == null)
            value = "";
        //let Comp = autoSize ? TextAreaAutoSize : "textarea";
        //let Comp: React.HTMLFactory<HTMLTextAreaElement> = autoSize ? TextAreaAutoSize : "textarea";
        let Comp = autoSize ? TextAreaAutoSize : "textarea";
        return React.createElement(Comp, Object.assign({}, rest, { ref: c => this.root = c, disabled: enabled != true, readOnly: !editable, className: classnames("simpleText selectable", className, autoSize_minHeight && "autoSize_minHeight"), style: E(styles.root, autoSize && {
                resize: "none",
                overflow: "hidden",
            }, autoSize_minHeight && minHeight != null && { minHeight }, style) }, autoSize_minHeight && { onHeightChange: height => {
                if (autoSize_minHeight) {
                    this.SetState({ minHeight: height });
                }
            } }, { value: editedValue != null ? editedValue : value, defaultValue: defaultValue, onChange: e => {
                var newVal = e.target.value;
                if (!allowLineBreaks)
                    newVal = newVal.replace(/[\r\n]/g, "");
                if (newVal == editedValue)
                    return; // if no text change, ignore event
                if (pattern) {
                    let valid = newVal.length ? newVal.match(pattern) != null : !this.props.required;
                    if (this.DOM && this.DOM["setCustomValidity"]) {
                        this.DOM["setCustomValidity"](valid ? "" : "Please match the requested format.");
                    }
                }
                if (delayChangeTillDefocus) {
                    this.SetState({ editedValue: newVal });
                }
                else {
                    if (onChange)
                        onChange(newVal, e);
                    this.SetState({ editedValue: null });
                }
            }, onBlur: e => {
                var newVal = e.target.value;
                if (newVal == value)
                    return; // if no text change, ignore event
                if (delayChangeTillDefocus) {
                    if (onChange)
                        onChange(newVal, e);
                    this.SetState({ editedValue: null });
                }
            }, onKeyDown: e => {
                if (delayChangeTillDefocus && useEscape && e.keyCode == keycode.codes.esc)
                    return void this.SetState({ editedValue: null });
                if (onKeyDown)
                    return onKeyDown(e);
            } }));
    }
};
TextArea.defaultProps = { enabled: true, editable: true, allowLineBreaks: true, useEscape: true };
TextArea = __decorate([
    ApplyBasicStyles
], TextArea);
export { TextArea };
