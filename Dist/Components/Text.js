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
import { ApplyBasicStyles, BaseComponent } from "react-vextensions";
import { ReactChildrenAsText, E } from "../Internals/FromJSVE.js";
let Text = class Text extends BaseComponent {
    render() {
        let _a = this.props, { wrap, style, children, title } = _a, rest = __rest(_a, ["wrap", "style", "children", "title"]);
        let textStr = ReactChildrenAsText(children, "");
        let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
        // if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
        let applyPre = wrap == false || (wrap != true && textHasEdgeSpaces);
        return (React.createElement("span", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, style: E({ display: "flex", alignItems: "center" }, applyPre && { whiteSpace: "pre" }, style) }), children));
    }
};
Text = __decorate([
    ApplyBasicStyles
], Text);
export { Text };
