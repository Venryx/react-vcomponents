var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CheckBox_1;
import React from "react";
import { BaseComponent, ApplyBasicStyles } from "react-vextensions";
import { Row } from "./Row";
import { ReactChildrenAsText, E } from "../Internals/FromJSVE";
let CheckBox = CheckBox_1 = class CheckBox extends BaseComponent {
    constructor(props) {
        super(props);
        this.id = ++CheckBox_1.lastID;
        //ValidateStandardProps(props);
    }
    render() {
        var { text, wrap, title, value, enabled, containerProps, style, checkboxProps, checkboxStyle, labelProps, labelStyle, internalChanging, onChange } = this.props;
        let { editedValue } = this.state;
        let textStr = ReactChildrenAsText(text, "");
        let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
        // if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
        let applyPre = wrap == false || (wrap != true && textHasEdgeSpaces);
        return (React.createElement(Row, Object.assign({}, containerProps, { center: true, title: title, style: E({ position: "relative" }, style) }),
            React.createElement("input", Object.assign({ ref: c => this.input = c }, checkboxProps, { id: "checkBox_" + this.id, type: "checkbox", disabled: enabled != true, checked: value == true, onChange: e => {
                    // if value was partial/indeterminate, and we click, return "false" as new-val (default behavior leaves dom in checked=true state)
                    if (value == "partial") {
                        this.input.checked = false; // this isn't really necessary (since props-change will update dom.checked), but we'll do it for consistency
                        onChange === null || onChange === void 0 ? void 0 : onChange(false, e);
                        return;
                    }
                    onChange === null || onChange === void 0 ? void 0 : onChange(this.input.checked, e);
                }, style: checkboxStyle })),
            text &&
                React.createElement("label", Object.assign({}, labelProps, { htmlFor: "checkBox_" + this.id, style: E({ marginLeft: 3 }, applyPre && { whiteSpace: "pre" }, labelStyle) }),
                    React.createElement("span", null),
                    text))
        /*<input ref={c=>this.input = c} type="checkbox"
            checked={editedValue != null ? editedValue : (checked || false)}
            disabled={enabled != true}
            onChange={e=> {
                var newVal = this.input.checked;
                if (internalChanging) {
                    this.SetState({editedValue: newVal});
                } else {
                    onChange(newVal, e);
                }
            }}/>*/
        );
    }
    PostRender() {
        let { value } = this.props;
        this.input.indeterminate = value == "partial";
    }
    get Checked() { return this.input.checked; }
};
CheckBox.defaultProps = { enabled: true };
CheckBox.lastID = -1;
CheckBox = CheckBox_1 = __decorate([
    ApplyBasicStyles
], CheckBox);
export { CheckBox };
/*export class CheckBox_Auto extends BaseComponent<
        {text?, title?, style?, labelStyle?,
            path: ()=>any, onChange?: (val: boolean)=>void}, {}> {
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
            <CheckBox {...rest} checked={node[propName]}
                onChange={val=> {
                    node.a(propName).set = val;
                    if (onChange) onChange(val);
                }}/>
        );
    }
}*/ 
