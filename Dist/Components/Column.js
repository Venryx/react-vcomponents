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
let Column = class Column extends BaseComponent {
    render() {
        let _a = this.props, { noShrink, center, style, title } = _a, rest = __rest(_a, ["noShrink", "center", "style", "title"]);
        const { css } = cssHelper(this);
        return React.createElement("div", Object.assign({}, rest, { ref: c => void (this.root = c), title: title !== null && title !== void 0 ? title : undefined, style: css({ display: "flex", flexDirection: "column" }, noShrink && { flexShrink: 0 }, center && { alignItems: "center" }, style) }));
    }
};
Column = __decorate([
    ApplyBasicStyles
], Column);
export { Column };
