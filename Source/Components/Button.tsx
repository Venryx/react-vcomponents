import React from "react";
import {BaseComponent, BaseProps, AddGlobalStyle, ApplyBasicStyles, ClassBasedStyles, cssHelper} from "react-vextensions";
import {FixHTMLProps, HTMLProps_Fixed, n} from "../@Types.js";
import {E} from "../Internals/FromJSVE.js";

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
} as const;

/*AddGlobalStyle(`
.Button:hover { background-color: rgba(90,100,110,.8) !important; }
`);*/

export type ButtonProps = {
	enabled?: boolean, text?: string | JSX.Element, className?: string, style?,
	size?: number, width?: number, height?: number, useOpacityForHover?: boolean,
	iconPath?: string, iconSize?: number, // custom icons
	mdIcon?: string, // material-design icons (https://github.com/Templarian/MaterialDesign)
	faIcon?: string, // font-awesome icons
	hasCheckbox?: boolean, checked?: boolean, checkboxStyle?, checkboxLabelStyle?, onCheckedChanged?,
	onLeftClick?, onDirectClick?
} & HTMLProps_Fixed<"div">;

//@Radium
@ApplyBasicStyles
export class Button extends BaseComponent<ButtonProps, {}> {
	static defaultProps = {enabled: true};
	
	render() {
		let {
			enabled, text, title, className, style,
			size, width, height, useOpacityForHover,
			iconPath, iconSize,
			mdIcon, faIcon,
			hasCheckbox, checked, checkboxStyle, checkboxLabelStyle, onCheckedChanged,
			onLeftClick, children,
			...rest
		} = this.props;
		const {css} = cssHelper(this);

		let padding: string|number = "5px 15px";
		let fontSize: number|n;
		let borderThickness = (style || {}).borderWidth || 1;

		width = width || size;
		height = height || size;
		if (height) {
			var baseHeight = 20;
			var heightDifPerSide = (height - baseHeight) / 2;
			padding = (`${heightDifPerSide}px 15px`);
		}
		if (mdIcon || faIcon) {
			width = width ?? 28;
			height = height ?? 28;
			padding = 0;
			fontSize = 18;
		}
		
		let finalStyle = css("finalStyle",
			Button_styles.root,
			useOpacityForHover && Button_styles.root_opacityHover,
			{width, height, padding},
			fontSize !== undefined && {fontSize},
			iconPath && {backgroundImage: `url(${iconPath})`},
			(iconSize && (width || height)) && {
				padding: 0,
				backgroundPosition: `${(width! - borderThickness*2 - iconSize) / 2}px ${(height! - borderThickness*2 - iconSize) / 2}px`,
				backgroundSize: iconSize
			},
			hasCheckbox && Button_styles.root_hasCheckbox,
			!enabled && Button_styles.root_disabled,
			Button_styles.root_override,
			style,
		);
		let className_final = `Button ${enabled ? ClassBasedStyles(finalStyle) : ""} ${className || ""}`;
		if (mdIcon) {
			className_final = className_final + ` mdi mdi-${mdIcon}`;
		}
		if (faIcon) {
			className_final = className_final + ` fas fa-${faIcon}`;
		}

		return (
			<div {...rest} title={title ?? undefined}
				className={className_final}
				style={finalStyle}
				onClick={e=> {
					var {enabled, onClick, onLeftClick, onDirectClick} = this.props;
					if (!enabled) return;
					if (onDirectClick && (e.target == e.currentTarget || e.target["parentElement"] == e.currentTarget)) onDirectClick(e);
					if (onClick) onClick(e);
					if (onLeftClick && e.button == 0) onLeftClick(e);
				}}
			>
				{/*hasCheckbox && <CheckBox value={checked} style={css(styles.checkbox, checkboxStyle)} labelStyle={checkboxLabelStyle}
					onChange={checked=>onCheckedChanged && onCheckedChanged(checked)}/>*/}
				{hasCheckbox
					? <span style={{verticalAlign: 4}}>{text}</span>
					: text}
				{children}
			</div>
		);
	}
}