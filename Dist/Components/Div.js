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
import { ApplyBasicStyles, BaseComponent, cssHelper } from "react-vextensions";
function Global(target) {
    if (typeof window == "undefined")
        return;
    Object.assign(window, { [target.name]: target });
}
let Span = class Span extends BaseComponent {
    render() {
        const { css } = cssHelper(this);
        var _a = this.props, { pre, style, title } = _a, rest = __rest(_a, ["pre", "style", "title"]);
        return React.createElement("span", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, style: css(style, pre && { whiteSpace: "pre" }) }));
    }
};
Span = __decorate([
    Global,
    ApplyBasicStyles
], Span);
export { Span };
let Pre = class Pre extends BaseComponent {
    render() {
        let _a = this.props, { allowWrap, style, children, title } = _a, rest = __rest(_a, ["allowWrap", "style", "children", "title"]);
        const { css } = cssHelper(this);
        return React.createElement("span", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, style: css({ whiteSpace: allowWrap ? "pre-wrap" : "pre" }, style) }), children);
    }
};
Pre = __decorate([
    Global,
    ApplyBasicStyles
], Pre);
export { Pre };
let Div = class Div extends BaseComponent {
    shouldComponentUpdate(nextProps, nextState) {
        let { shouldUpdate } = this.props;
        return shouldUpdate ? shouldUpdate(nextProps, nextState) : true;
        //return (shouldUpdate && shouldUpdate(nextProps, nextState)) || ShallowCompare(this, nextProps, nextState);
    }
    render() {
        let _a = this.props, { shouldUpdate, style, title } = _a, rest = __rest(_a, ["shouldUpdate", "style", "title"]);
        return React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, style: style }));
    }
};
Div = __decorate([
    Global
    //@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating
    ,
    ApplyBasicStyles
], Div);
export { Div };
