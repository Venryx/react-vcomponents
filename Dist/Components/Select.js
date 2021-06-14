var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Select_1;
import React from "react";
import { ApplyBasicStyles, BaseComponent } from "react-vextensions";
import { Assert, AssertWarn, E, RemoveDuplicates } from "../Internals/FromJSVE.js";
export const compareBy_defaultFuncs = {
    name: (option, value) => option.name === value,
    value: (option, value) => {
        if (value == null && option.value == null)
            return true;
        return option.value === value;
    },
    value_strict: (option, value) => option.value === value,
    value_toString: (option, value) => option.value == null ? value == null : option.value.toString() === value.toString(),
};
export function GetFinalCompareByFunc(props) {
    const { compareBy, compareByFunc } = props;
    if (compareByFunc)
        return compareByFunc;
    return compareBy_defaultFuncs[compareBy];
}
let Select = Select_1 = class Select extends BaseComponent {
    constructor(props) {
        super(props);
        let options = Select_1.GetOptionsListFromProps(props);
        Assert(RemoveDuplicates(options.map(a => a.name)).length == options.length, () => {
            var optionsWithNonUniqueNames = options.filter(a => options.filter(b => b.name == a.name).length > 1);
            return `Select options must have unique names. (shared: ${optionsWithNonUniqueNames.map(a => a.name).join(", ")})`;
        });
    }
    // ValidateProps gets called by vwebapp-framework, if project using it
    /*static ValidateProps(props: Select_Props) {
        let options = this.GetOptionsListFromProps(props);
        Assert(RemoveDuplicates(options.map(a=>a.name)).length == options.length, ()=> {
            var optionsWithNonUniqueNames = options.filter(a=>options.filter(b=>b.name == a.name).length > 1);
            return `Select options must have unique names. (shared: ${optionsWithNonUniqueNames.map(a=>a.name).join(", ")})`;
        });
    }*/
    static GetOptionsListFromProps(props) {
        let { options: options_raw, value } = props;
        let result = [];
        if (options_raw instanceof Array) {
            for (let option_raw of options_raw) {
                if (option_raw && option_raw instanceof Object && "name" in option_raw && "value" in option_raw) {
                    result.push(option_raw);
                }
                else {
                    result.push({ name: option_raw["name"] || option_raw.toString(), value: option_raw });
                }
            }
        } /*else if (IsConstructor(options_raw)) {
            Assert(options_raw.prototype instanceof Enum, "Class provided must derive from class 'Enum'.");
            result = (options_raw as any).options;
        }*/
        else {
            let optionsMap = options_raw;
            for (let { name, value } of optionsMap.Props()) {
                //result.push(new Option(name, value));
                result.push({ name, value });
            }
        }
        // if invalid value is supplied, add placeholder-option for it (so user can see that unlisted/invalid value is present)
        const compareByFunc_final = GetFinalCompareByFunc(props);
        if (result.find(option => compareByFunc_final(option, value)) == null) {
            result.push({ name: `[invalid: "${value}"]`, value });
        }
        return result;
    }
    get OptionsList() {
        return Select_1.GetOptionsListFromProps(this.props);
    }
    GetIndexOfOption(option) {
        return this.OptionsList.indexOf(option);
    }
    GetIndexOfOptionMatchingValue(value = this.props.value) {
        var options = this.OptionsList;
        const compareByFunc_final = GetFinalCompareByFunc(this.props);
        return options.findIndex(option => compareByFunc_final(option, value));
    }
    //GetIndexForValue(value) { return this.FlattenedChildren.FindIndex(a=>a.props.value == value); }
    GetOptionMatchingValue(value = this.props.value) {
        /*Assert(this.props.displayType == "dropdown");
        var selectedIndex = this.root!.selectedIndex;
        return this.OptionsList[selectedIndex];*/
        var selectedIndex = this.GetIndexOfOptionMatchingValue(value);
        return this.OptionsList[selectedIndex];
    }
    /** Finds the first "matching option", then returns that entry's "value" field. (vs this.props.value, which may only loosely match the entry's "value" field, as per "compareBy" property) */
    GetOptionValueMatchingValue(value = this.props.value) {
        return this.GetOptionMatchingValue(value).value;
    }
    render() {
        var _a;
        var { displayType, value, verifyValue, enabled, className, title, style, childStyle, onChange } = this.props;
        var options = this.OptionsList;
        let valueValid = this.GetIndexOfOptionMatchingValue(value) != -1 && !((_a = this.GetOptionMatchingValue()) === null || _a === void 0 ? void 0 : _a.name.startsWith(`[invalid: "`));
        // if there are no options yet, or value provided is null, don't require match, since this may be a pre-data render
        if (options.length && value != null && verifyValue) {
            AssertWarn((valueValid), `Select's value must match one of the options. @options(${options.map(a => a.name + ":" + a.value).join(", ")}) @value(${value})`);
        }
        /*var newChildren = this.FlattenedChildren.map((child: any, index)=> {
            //return React.cloneElement(child, {key: index, index: index});
            return <Option key={index} index={index} style={child.props.style}>{child.props.children}</Option>;
        });*/
        if (displayType == "dropdown") {
            return (React.createElement("select", { ref: c => this.root = c, disabled: enabled != true, value: "value" + this.GetIndexOfOptionMatchingValue(value), className: className, title: title, style: E({ color: "#000" }, style), onChange: e => {
                    if (!onChange)
                        return;
                    var newSelectedIndex = this.root.selectedIndex;
                    let newSelectedOption = this.OptionsList[newSelectedIndex];
                    onChange(newSelectedOption.value);
                } }, options.map((option, index) => {
                return React.createElement(Dropdown_OptionUI, { key: index, index: index, style: E(childStyle, option.style) }, option.name);
            })));
        }
        return (React.createElement("div", { style: E({ /*borderRadius: 4, background: "rgba(255,255,255,.3)"*/}, style) }, options.map((option, index) => {
            return React.createElement(ButtonBar_OptionUI, { key: index, first: index == 0, last: index == options.length - 1, selected: option.value === value, enabled: enabled, style: E(childStyle, option.style), onSelect: e => onChange && onChange(option.value) }, option.name);
        })));
    }
};
Select.defaultProps = {
    enabled: true,
    displayType: "dropdown",
    compareBy: "value",
    equateNullAndUndefined: true,
    verifyValue: true,
};
Select = Select_1 = __decorate([
    ApplyBasicStyles
], Select);
export { Select };
export class Dropdown_OptionUI extends BaseComponent {
    render() {
        var { index, style, children } = this.props;
        return (React.createElement("option", { value: `value${index}`, style: E({ color: "#000" }, style) }, children));
    }
}
export class ButtonBar_OptionUI extends BaseComponent {
    render() {
        let { first, last, selected, enabled, style, onSelect, children } = this.props;
        let { hovered } = this.state;
        return (React.createElement("div", { className: "ButtonBar_OptionUI", onMouseEnter: () => { if (enabled)
                this.SetState({ hovered: true }); }, onMouseLeave: () => { if (enabled)
                this.SetState({ hovered: false }); }, style: E({ display: "inline-block", background: "rgba(255,255,255,.3)", padding: "5px 12px", cursor: "pointer" }, hovered && { background: "rgba(255,255,255,.5)" }, first && { borderRadius: "4px 0 0 4px" }, !first && { border: "solid #222", borderWidth: "0 0 0 1px" }, last && { borderRadius: "0 4px 4px 0" }, first && last && { borderRadius: "4px" }, selected && { background: "rgba(255,255,255,.5)" }, !enabled && { opacity: .5, cursor: "default" }, style), onClick: enabled ? onSelect : null }, children));
    }
}
/*export class Select_Auto extends BaseComponent<
        {options: {name: string, value, style?}[] | string[] | (new()=>Enum) | {[s: string]: any},
            displayType?: "dropdown" | "button bar",
            compareBy?: "name" | "value" | "value toString",
            className?, title?, style?, childStyle?,
            path: ()=>any, onChange?: (val)=>void}, {}> {
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
            <Select {...rest} value={node[propName]} onChange={val=> {
                node.a(propName).set = val;
                if (onChange) onChange(val);
            }}/>
        );
    }
}*/ 
