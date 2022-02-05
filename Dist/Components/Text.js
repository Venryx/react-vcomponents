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
import { ReactChildrenAsText } from "../Internals/FromJSVE.js";
let Text = class Text extends BaseComponent {
    render() {
        let _a = this.props, { keepWhitespace, wrap, style, children, title } = _a, rest = __rest(_a, ["keepWhitespace", "wrap", "style", "children", "title"]);
        let textStr = ReactChildrenAsText(children, "");
        let textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
        // if text starts/ends with a space, keep whitespace by default
        keepWhitespace !== null && keepWhitespace !== void 0 ? keepWhitespace : (keepWhitespace = textHasEdgeSpaces);
        wrap !== null && wrap !== void 0 ? wrap : (wrap = true);
        const whiteSpaceStyle = keepWhitespace && wrap ? { whiteSpace: "pre-wrap" } :
            keepWhitespace ? { whiteSpace: "pre" } :
                wrap ? {} : // default behavior
                    { whiteSpace: "nowrap" };
        const { css } = cssHelper(this);
        return (React.createElement("span", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, style: css({ display: "flex", alignItems: "center" }, whiteSpaceStyle, style) }), children));
    }
};
Text = __decorate([
    ApplyBasicStyles
], Text);
export { Text };
