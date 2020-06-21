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
import { BaseComponent, ApplyBasicStyles } from "react-vextensions";
import keycode from "keycode";
import { E, NumberCES_KeepBetween } from "../Internals/FromJSVE";
let Spinner = class Spinner extends BaseComponent {
    ComponentDidMountOrUpdate() {
        this.ValidateValue(this.props.value);
    }
    ValidateValue(value) {
        var _a, _b, _c;
        const { validator } = this.props;
        if (validator == null) {
            /*if (this.root?.validity.customError) {
                this.root?.setCustomValidity(null as any);
            }*/
            return;
        }
        const result = validator(value);
        if (result == true)
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.setCustomValidity("");
        else if (result == false)
            (_b = this.root) === null || _b === void 0 ? void 0 : _b.setCustomValidity("Value is invalid.");
        else
            (_c = this.root) === null || _c === void 0 ? void 0 : _c.setCustomValidity(result);
    }
    render() {
        let _a = this.props, { enabled, autoSize, delayChangeTillDefocus, useEscape, enforceRange, validator, onChange, step, min, max, value, title, style, onBlur, onKeyDown } = _a, rest = __rest(_a, ["enabled", "autoSize", "delayChangeTillDefocus", "useEscape", "enforceRange", "validator", "onChange", "step", "min", "max", "value", "title", "style", "onBlur", "onKeyDown"]);
        let { editedValue } = this.state;
        style = E({ color: "#000" }, style);
        //if (max == Number.MAX_SAFE_INTEGER && !("width" in style)) {
        if (!autoSize && !("width" in style)) {
            style.width = 60;
        }
        return (React.createElement("input", Object.assign({}, rest, { ref: c => this.root = c, type: "number", step: step, min: min, max: max, value: editedValue != null ? editedValue : (value || 0), disabled: enabled != true, title: title, style: style, onChange: e => {
                var newVal = Number(e.target.value);
                if (enforceRange)
                    newVal = NumberCES_KeepBetween(newVal, min, max);
                if (newVal == editedValue)
                    return; // if no change, ignore event
                this.ValidateValue(newVal);
                if (delayChangeTillDefocus) {
                    this.SetState({ editedValue: newVal });
                }
                else {
                    if (onChange)
                        onChange(newVal, e);
                    this.SetState({ editedValue: null });
                }
            }, onBlur: e => {
                var newVal = Number(e.target.value);
                if (newVal == value)
                    return; // if no change, ignore event
                if (delayChangeTillDefocus) {
                    if (onChange)
                        onChange(newVal, e);
                    this.SetState({ editedValue: null });
                }
                if (onBlur)
                    return onBlur(e);
            }, onKeyDown: e => {
                if (delayChangeTillDefocus && useEscape && e.keyCode == keycode.codes.esc)
                    return void this.SetState({ editedValue: null });
                if (onKeyDown)
                    return onKeyDown(e);
            } })));
    }
};
Spinner.defaultProps = { step: 1, min: 0, max: Number.MAX_SAFE_INTEGER, value: 0, enabled: true, useEscape: true };
Spinner = __decorate([
    ApplyBasicStyles
], Spinner);
export { Spinner };
/*export class Spinner_Auto extends BaseComponent
        <{step?, min?, max?, enabled?, title?, style?, onFocus?,
            path: ()=>any, onChange?: (val: number)=>void}, {}> {
    static defaultProps = {step: 1, min: 0, max: Number.MAX_SAFE_INTEGER};

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
            <Spinner {...rest} value={node[propName]} onChange={val=> {
                node.a(propName).set = val;
                if (onChange) onChange(val);
            }}/>
        );
    }
}*/ 
