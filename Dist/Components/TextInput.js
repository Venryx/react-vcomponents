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
import { BaseComponent, ApplyBasicStyles, cssHelper } from "react-vextensions";
import * as keycode from "keycode";
let TextInput = class TextInput extends BaseComponent {
    render() {
        var _a = this.props, { value, enabled, editable, onChange, instant, useEscape, style, onBlur, onKeyDown, title } = _a, rest = __rest(_a, ["value", "enabled", "editable", "onChange", "instant", "useEscape", "style", "onBlur", "onKeyDown", "title"]);
        var { editedValue } = this.state;
        const { css } = cssHelper(this);
        return (React.createElement("input", Object.assign({}, rest, { ref: c => this.root = c, title: title !== null && title !== void 0 ? title : undefined, disabled: enabled != true, readOnly: !editable, style: css({ color: "black" }, style), value: editedValue != null ? editedValue : (value || ""), onChange: e => {
                var newVal = e.target.value;
                if (newVal == editedValue)
                    return; // if no text change, ignore event
                if (!instant) {
                    this.SetState({ editedValue: newVal });
                }
                else {
                    if (onChange)
                        onChange(newVal, e);
                    this.SetState({ editedValue: null });
                }
            }, onBlur: e => {
                var newVal = e.target["value"];
                if (newVal == value)
                    return; // if no text change, ignore event
                if (!instant) {
                    if (onChange)
                        onChange(newVal, e);
                    this.SetState({ editedValue: null });
                }
                if (onBlur)
                    return onBlur(e);
            }, onKeyDown: e => {
                if (!instant && useEscape && e.keyCode == keycode.codes.esc)
                    return void this.SetState({ editedValue: null });
                if (onKeyDown)
                    return onKeyDown(e);
            } })));
    }
    GetValue() {
        return this.root.value;
    }
};
TextInput.defaultProps = { enabled: true, editable: true, type: "text", useEscape: true };
TextInput = __decorate([
    ApplyBasicStyles
], TextInput);
export { TextInput };
/*export class TextInput_Auto extends BaseComponent<
        {style?, instant?,
            path: ()=>any, onChange?: (val: string)=>void}, {}> {
    ComponentWillMountOrReceiveProps(props) {
        var {path} = props;
        let {node, key: propName} = path();
        this.AddChangeListeners(node,
            (propName + "_PostSet").Func(this.Update),
        );
    }

    render() {
        var {path, onChange, ...rest} = this.props;
        let {node, key: propName} = path();
        return (
            <TextInput {...rest} value={node[propName]} onChange={val=> {
                node.a(propName).set = val;
                if (onChange) onChange(val);
            }}/>
        );
    }
}*/ 
