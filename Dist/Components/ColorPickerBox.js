var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { BaseComponent, ApplyBasicStyles, cssHelper } from "react-vextensions";
import { Assert } from "../Internals/FromJSVE.js";
//declare var require;
//declare var __webpack_require__;
//declare var Require; // custom function added by webpack-runtime-require (we assume user project has this installed)
let SketchPicker, chroma;
let ColorPickerBox = class ColorPickerBox extends BaseComponent {
    /*constructor(props) {
        DynamicImports();
        super(props);
    }*/
    static Init(react_color, chroma_js) {
        SketchPicker = react_color.SketchPicker;
        chroma = chroma_js;
    }
    constructor(props) {
        super(props);
        Assert(SketchPicker != null && chroma != null, "You must call ColorPickerBox.Init with the react-color and chroma-js module-exports before creating an instance.");
    }
    ComponentWillMountOrReceiveProps(props) {
        var _a;
        let { color } = props;
        this.SetState({ color: [color[0], color[1], color[2], (_a = color[3]) !== null && _a !== void 0 ? _a : 1] });
    }
    render() {
        let { onChange, popupStyle } = this.props;
        let { show, color } = this.state;
        let presetColors = [chroma.hsl(0, 0, 0).css(), chroma.hsl(0, 0, .5).css(), chroma.hsl(0, 0, 1).css()];
        for (let h = 0; h < 360; h = parseInt(h + (360 / 15) + "")) {
            //for (let s = 0; s <= 1; s += 1 / 2) {
            let s = 1;
            for (let l of [.25, .5, .75]) {
                presetColors.push(chroma.hsl(h, s, l).css());
            }
        }
        const { css } = cssHelper(this);
        return (React.createElement("div", null,
            React.createElement("div", { style: { padding: 5, background: "#fff", borderRadius: 1, boxShadow: "0 0 0 1px rgba(0,0,0,.1)", display: "inline-block", cursor: "pointer" }, onClick: () => this.SetState({ show: !show }) },
                React.createElement("div", { style: { width: 36, height: 14, borderRadius: 2, background: `rgba(${color})` } })),
            show &&
                React.createElement("div", { style: css({ position: "absolute", zIndex: 2 }, popupStyle) },
                    React.createElement("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }, onClick: () => this.SetState({ show: false }) }),
                    React.createElement(SketchPicker, { presetColors: presetColors, color: { r: color[0], g: color[1], b: color[2], a: color[3] }, onChange: (color) => {
                            this.SetState({ color: [color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a] });
                        }, onChangeComplete: (color) => {
                            if (onChange)
                                onChange([color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a]);
                        } }))));
    }
};
ColorPickerBox = __decorate([
    ApplyBasicStyles
], ColorPickerBox);
export { ColorPickerBox };
