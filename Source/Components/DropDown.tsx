import classNames from "classnames";
import React, {cloneElement} from "react";
import {AddGlobalStyle, BaseComponent, cssHelper, GetDOM} from "react-vextensions";
import {HTMLProps_Fixed} from "../@Types.js";

AddGlobalStyle(`
.dropdown {
	display: inline-block;
	position: relative;
}
.dropdown__content {
	display: none;
	position: absolute;
}
.dropdown--active > .dropdown__content {
	display: block;
}
/*
.dropdown__content > * { pointer-events: auto; }
.dropdown__content { pointer-events: none; }
*/
`);

//export class DropDown extends BaseComponentPlus({} as {className?, onShow?, onHide?, active?: boolean} & HTMLProps_Fixed<"div">, {active: false}) {
/** NOTE: You must pass a `DropDownTrigger` and `DropDownContent` as children of this one, and have that `DropDownTrigger` have a child with a working `onClick` property -- otherwise the DropDown will not open/trigger. */
export class DropDown extends BaseComponent<{className?, active?: boolean, onShow?, onHide?, autoHide?: boolean} & HTMLProps_Fixed<"div">, {active: boolean}> {
	static defaultState = {active: false, autoHide: true};
	
	ComponentDidMount() {
		if (this.props.autoHide) {
			window.addEventListener("click", this.OnWindowClick);
			window.addEventListener("touchstart", this.OnWindowClick);
		}
	}
	ComponentWillUnmount() {
		if (this.props.autoHide) {
			window.removeEventListener("click", this.OnWindowClick);
			window.removeEventListener("touchstart", this.OnWindowClick);
		}
	}
	private OnWindowClick = (event)=> {
		const dropdownElement = GetDOM(this);
		if (event.target !== dropdownElement && !dropdownElement!.contains(event.target) && this.IsActive()) {
			this.Hide();
		}
	};
	private OnToggleClick = (event)=> {
		event.preventDefault();
		if (this.IsActive()) {
			this.Hide();
		} else {
			this.Show();
		}
	};

	IsActive() {
		return this.props.active != null ? this.props.active : this.state.active;
	}

	Show() {
		let {onShow} = this.props;
		this.SetState({
			active: true
		}, ()=> {
			if (onShow) onShow();
		});
	}
	Hide() {
		let {onHide} = this.props;
		this.SetState({
			active: false
		}, ()=> {
			if (onHide) onHide();
		});
	}

	render() {
		const {children, className} = this.props;
		// create component classes
		const active = this.IsActive();
		// stick callback on trigger element
		const boundChildren = React.Children.map(children, (child: any)=> {
			if (child.type === DropDownTrigger) {
				const originalOnClick = child.props.onClick;
				child = cloneElement(child, {
					onClick: (event) => {
						this.OnToggleClick(event);
						if (originalOnClick) {
							originalOnClick.apply(child, arguments);
						}
					}
				});
			}
			return child;
		});

		const cleanProps = {...this.props} as any;
		delete cleanProps.active;
		delete cleanProps.onShow;
		delete cleanProps.onHide;
		delete cleanProps.autoHide;
		return (
			<div {...cleanProps} className={classNames("dropdown", {"dropdown--active": active}, className)}>
				{boundChildren}
			</div>
		);
	}
}

//export class DropDownTrigger extends BaseComponent<{className?} & HTMLProps_Fixed<"div">, {}> {
/** NOTE: The component you pass as a child of this one, *must* have a working `onClick` property -- otherwise the DropDown will not open/trigger. */
export class DropDownTrigger extends BaseComponent<{}, {}> {
	render() {
		/* const {children, className, ...rest} = this.props;
		return (
			<div {...rest} className={classNames("dropdown__trigger", className)}>
				{children}
			</div>
		); */
		const {children, ...rest} = this.props;
		// whatever properties were passed to this DropDownTrigger (eg. the onClick handler from DropDown.render), add them onto the children
		const childrenWithPassedProps = React.Children.map(children, (child: React.JSX.Element)=>cloneElement(child, rest));
		return childrenWithPassedProps as React.JSX.Element[];
	}
}

export class DropDownContent extends BaseComponent<{content?: ()=>React.JSX.Element, className?, style?} & Omit<HTMLProps_Fixed<"div">, "content">, {}> {
	render() {
		const {content, children, className, style, title, ...rest} = this.props;
		const {css} = cssHelper(this);
		return (
			<div {...rest} title={title ?? undefined} className={classNames("dropdown__content", className)} style={css(
				{padding: 10, background: "rgba(0,0,0,.7)"},
				style,
			)}>
				{content?.()}
				{children}
			</div>
		);
	}
}