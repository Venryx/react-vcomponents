import React from "react";
import {BaseComponent} from "react-vextensions";
import { Assert } from "../General";

//declare var require;
//declare var __webpack_require__;
//declare var Require; // custom function added by webpack-runtime-require (we assume user project has this installed)

let SketchPicker, chroma;
/*function DynamicImports() {
	//let req = eval("require");
	//let req = __webpack_require__;
	Assert(Require, "webpack-runtime-require package must be installed (and initialized) to use the ColorPickerBox component.");
	let req = Require;

	Assert(typeof req("react-color") != "string", "react-color package must be installed (and imported) to use the ColorPickerBox component.");
	SketchPicker = req("react-color").SketchPicker;
	Assert(typeof req("chroma-js") != "string", "chroma-js package must be installed (and imported) to use the ColorPickerBox component.");
	chroma = req("chroma-js");
}*/

export class ColorPickerBox extends BaseComponent<{color: string, onChange: (color: string)=>void}, {show: boolean, color: string}> {
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
		let {color} = props;
		this.SetState({color});
	}

  	render() {
	  	let {onChange} = this.props;
		let {show, color} = this.state;

		let presetColors = [chroma.hsl(0, 0, 0).css(), chroma.hsl(0, 0, .5).css(), chroma.hsl(0, 0, 1).css()];
		for (let h = 0; h < 360; h = parseInt(h + (360 / 15) + "")) {
			//for (let s = 0; s <= 1; s += 1 / 2) {
			let s = 1;
			for (let l of [.25, .5, .75]) {
				presetColors.push(chroma.hsl(h, s, l).css());
			}
		}

		return (
			<div>
				<div style={{padding: 5, background: "#fff", borderRadius: 1, boxShadow: "0 0 0 1px rgba(0,0,0,.1)", display: "inline-block", cursor: "pointer"}}
						onClick={()=>this.SetState({show: !show})}>
					<div style={{width: 36, height: 14, borderRadius: 2, background: `rgba(${color})`}}/>
				</div>
				{show &&
					<div style={{position: "absolute", zIndex: 2}}>
						<div style={{position: "fixed", top: 0, right: 0, bottom: 0, left: 0}} onClick={()=>this.SetState({show: false})}/>
						<SketchPicker
							presetColors={presetColors}
							color={{r: color.split(",")[0], g: color.split(",")[1], b: color.split(",")[2], a: color.split(",")[3]}}
							onChange={color=> {
								let colorStr = color.rgb.VValues().join(",");
								this.SetState({color: colorStr});
							}}
							onChangeComplete={color=> {
								let colorStr = color.rgb.VValues().join(",");
								onChange(colorStr);
							}}/>
					</div>}
			</div>
		);
	}
}