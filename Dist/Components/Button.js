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
import { BaseComponent, ApplyBasicStyles, ClassBasedStyles, cssHelper } from "react-vextensions";
export const Button_styles = {
    root: {
        //display: "inline-block",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(90,100,110,.6)",
        backgroundRepeat: "no-repeat",
        borderRadius: 5,
        border: "1px solid rgba(210,210,230,.12)",
        color: "#AAA",
        /*fontFamily: "fancyFontSemibold, Trebuchet MS, Tahoma, sans-serif",*/
        fontSize: 14, textAlign: "center",
        cursor: "pointer",
        ":hover": {
            //backgroundColor: "rgba(0,0,0,.7)"
            backgroundColor: "rgba(90,100,110,.8)",
            //backgroundColor: "rgba(20,20,20,1)",
        },
    },
    root_opacityHover: {
        opacity: .6,
        ":hover": {
            opacity: 1,
        }
    },
    root_hasCheckbox: { paddingTop: 4, verticalAlign: 1 },
    root_disabled: {
        opacity: .5, cursor: "default",
        //pointerEvents: "none",
        //":hover": {backgroundColor: "rgba(0,0,0,.3)"}
    },
    root_override: {},
    checkbox: { marginLeft: -6 },
};
//@Radium
let Button = class Button extends BaseComponent {
    render() {
        let _a = this.props, { enabled, text, title, className, style, size, width, height, useOpacityForHover, iconPath, iconSize, mdIcon, faIcon, hasCheckbox, checked, checkboxStyle, checkboxLabelStyle, onCheckedChanged, onLeftClick, children } = _a, rest = __rest(_a, ["enabled", "text", "title", "className", "style", "size", "width", "height", "useOpacityForHover", "iconPath", "iconSize", "mdIcon", "faIcon", "hasCheckbox", "checked", "checkboxStyle", "checkboxLabelStyle", "onCheckedChanged", "onLeftClick", "children"]);
        const { css } = cssHelper(this);
        let padding = "5px 15px";
        let borderThickness = (style || {}).borderWidth || 1;
        width = width || size;
        height = height || size;
        if (height) {
            var baseHeight = 20;
            var heightDifPerSide = (height - baseHeight) / 2;
            padding = (`${heightDifPerSide}px 15px`);
        }
        // font-based icon
        let stylesForFontBasedIcon = {};
        if (mdIcon || faIcon) {
            width = width !== null && width !== void 0 ? width : 28;
            height = height !== null && height !== void 0 ? height : 28;
            padding = 0;
            stylesForFontBasedIcon = { fontSize: iconSize !== null && iconSize !== void 0 ? iconSize : 18 };
        }
        // image-based icon
        let stylesForImageBasedIcon = {};
        if (iconPath) {
            stylesForImageBasedIcon = css("stylesForImageBasedIcon", { backgroundImage: `url(${iconPath})` }, (iconSize && (width || height)) && {
                padding: 0,
                backgroundPosition: `${(width - borderThickness * 2 - iconSize) / 2}px ${(height - borderThickness * 2 - iconSize) / 2}px`,
                backgroundSize: iconSize
            });
        }
        let finalStyle = css("finalStyle", Button_styles.root, useOpacityForHover && Button_styles.root_opacityHover, { width, height, padding }, stylesForFontBasedIcon, stylesForImageBasedIcon, hasCheckbox && Button_styles.root_hasCheckbox, !enabled && Button_styles.root_disabled, Button_styles.root_override, style);
        let className_final = `Button ${enabled ? ClassBasedStyles(finalStyle) : ""} ${className || ""}`;
        if (mdIcon) {
            className_final = className_final + ` mdi mdi-${mdIcon}`;
        }
        if (faIcon) {
            className_final = className_final + ` fas fa-${faIcon}`;
        }
        return (React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, className: className_final, style: finalStyle, onClick: e => {
                var { enabled, onClick, onLeftClick, onDirectClick } = this.props;
                if (!enabled)
                    return;
                if (onDirectClick && (e.target == e.currentTarget || e.target["parentElement"] == e.currentTarget))
                    onDirectClick(e);
                if (onClick)
                    onClick(e);
                if (onLeftClick && e.button == 0)
                    onLeftClick(e);
            } }),
            hasCheckbox
                ? React.createElement("span", { style: { verticalAlign: 4 } }, text)
                : text,
            children));
    }
};
Button.defaultProps = { enabled: true };
Button = __decorate([
    ApplyBasicStyles
], Button);
export { Button };
