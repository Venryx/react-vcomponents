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
let Row = class Row extends BaseComponent {
    render() {
        let _a = this.props, { noShrink, center, style, title } = _a, rest = __rest(_a, ["noShrink", "center", "style", "title"]);
        const { css } = cssHelper(this);
        return React.createElement("div", Object.assign({}, rest, { ref: c => void (this.root = c), title: title !== null && title !== void 0 ? title : undefined, style: css({ display: "flex" }, noShrink && { flexShrink: 0 }, center && { alignItems: "center" }, style) }));
    }
};
Row = __decorate([
    ApplyBasicStyles
], Row);
export { Row };
let RowLR = class RowLR extends BaseComponent {
    render() {
        var _a = this.props, { splitAt, height, className, style, leftStyle, rightStyle, children, title } = _a, rest = __rest(_a, ["splitAt", "height", "className", "style", "leftStyle", "rightStyle", "children", "title"]);
        //Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
        // if a child has "just-wrapper" tag, take out the wrapper and use its children directly (temp helper for React <16)
        /*if (children[1].props.className && children[1].props.className == "just-wrapper") {
            children[1] = children[1].props.children;
        }*/
        let childrenList = children;
        const { css } = cssHelper(this);
        return (React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, style: css({ display: "flex", flexShrink: 0 }, style) }),
            React.createElement(Row, { center: true, style: css({ width: typeof splitAt == "string" ? splitAt + "%" : splitAt }, leftStyle) }, children[0]),
            React.createElement(Row, { center: true, style: css({ width: typeof splitAt == "string" ? (100 - parseInt(splitAt.slice(0, -1))) + "%" : `calc(100% - ${splitAt}px)` }, rightStyle) },
                childrenList.length == 2 && childrenList[1],
                childrenList.length > 2 && childrenList.slice(1))));
    }
};
RowLR.defaultProps = { splitAt: "50%" };
RowLR = __decorate([
    ApplyBasicStyles
], RowLR);
export { RowLR };
