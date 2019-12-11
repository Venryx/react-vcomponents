import React from "react";
import {BaseComponent, BaseProps, AddGlobalStyle, ApplyBasicStyles, ClassBasedStyles} from "react-vextensions";
import {E} from "../Internals/FromJSVE";

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
	root_hasCheckbox: {paddingTop: 4, verticalAlign: 1},
	root_disabled: {
		opacity: .5, cursor: "default",
		//pointerEvents: "none",
		//":hover": {backgroundColor: "rgba(0,0,0,.3)"}
	},
	root_override: {},
	checkbox: {marginLeft: -6},
};

/*AddGlobalStyle(`
.Button:hover { background-color: rgba(90,100,110,.8) !important; }
`);*/

export type ButtonProps = {enabled?: boolean, text?: string | JSX.Element, title?: string, className?: string, style?,
	size?: number, width?: number, height?: number, iconSize?: number, iconPath?: string, useOpacityForHover?: boolean,
	hasCheckbox?: boolean, checked?: boolean, checkboxStyle?, checkboxLabelStyle?, onCheckedChanged?,
	onLeftClick?, onDirectClick?} & React.HTMLAttributes<HTMLDivElement>;

//@Radium
@ApplyBasicStyles
export class Button extends BaseComponent<ButtonProps, {}> {
	static defaultProps = {enabled: true};
	
	render() {
		var {enabled, text, title, className, style, size, width, height, iconSize, iconPath, useOpacityForHover,
			hasCheckbox, checked, checkboxStyle, checkboxLabelStyle, onCheckedChanged,
			onLeftClick, children, ...rest} = this.props;

		width = width || size;
		height = height || size;

		var padding = "5px 15px";
		if (height) {
			var baseHeight = 20;
			var heightDifPerSide = (height - baseHeight) / 2;
			padding = (`${heightDifPerSide}px 15px`);
		}

		let borderThickness = (style || {}).borderWidth || 1;
		
		let finalStyle = E(
			Button_styles.root,
			useOpacityForHover && Button_styles.root_opacityHover,
			{padding, width, height},
			(iconSize && (width || height)) && {
				padding: 0,
				backgroundPosition: `${(width - borderThickness*2 - iconSize) / 2}px ${(height - borderThickness*2 - iconSize) / 2}px`,
				backgroundSize: iconSize
			},
			iconPath && {backgroundImage: `url(${iconPath})`},
			hasCheckbox && Button_styles.root_hasCheckbox,
			!enabled && Button_styles.root_disabled,
			Button_styles.root_override,
			style,
		);

	    return (
			<div {...rest} title={title}
				className={`Button ${enabled ? ClassBasedStyles(finalStyle) : ""} ${className || ""}`}
				style={finalStyle}
				onClick={e=> {
					var {enabled, onClick, onLeftClick, onDirectClick} = this.props;
					if (!enabled) return;
					if (onDirectClick && (e.target == e.currentTarget || e.target["parentElement"] == e.currentTarget)) onDirectClick(e);
					if (onClick) onClick(e);
					if (onLeftClick && e.button == 0) onLeftClick(e);
				}}
			>
				{/*hasCheckbox && <CheckBox checked={checked} style={E(styles.checkbox, checkboxStyle)} labelStyle={checkboxLabelStyle}
					onChange={checked=>onCheckedChanged && onCheckedChanged(checked)}/>*/}
				{hasCheckbox
					? <span style={{verticalAlign: 4}}>{text}</span>
					: text}
				{children}
			</div>
		);
	}
}