import {cloneElement} from "react";
import {BaseComponent, AddGlobalStyle, GetDOM, E, BaseComponentPlus} from "react-vextensions";
import React from "react";
import classNames from "classnames";

AddGlobalStyle(`
.dropdown {
    display: inline-block;
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

export class DropDown extends BaseComponentPlus({} as {className?, onShow?, onHide?, active?: boolean} & React.HTMLAttributes<HTMLDivElement>, {active: false}) {
	ComponentDidMount() {
		window.addEventListener("click", this.OnWindowClick);
		window.addEventListener("touchstart", this.OnWindowClick);
	}
	ComponentWillUnmount() {
		window.removeEventListener("click", this.OnWindowClick);
		window.removeEventListener("touchstart", this.OnWindowClick);
	}
	private OnWindowClick = (event)=> {
		const dropdownElement = GetDOM(this);
		if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.IsActive()) {
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
					ref: "trigger",
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
		return (
			<div {...cleanProps} className={classNames("dropdown", {"dropdown--active": active}, className)}>
				{boundChildren}
			</div>
		);
	}
}

//export class DropDownTrigger extends BaseComponent<{className?} & React.HTMLAttributes<HTMLDivElement>, {}> {
export class DropDownTrigger extends BaseComponentPlus({} as {}, {}) {
	render() {
		/* const {children, className, ...rest} = this.props;
		return (
			<div {...rest} className={classNames("dropdown__trigger", className)}>
				{children}
			</div>
		); */
		const {children, ...rest} = this.props;
		// whatever properties were passed to this DropDownTrigger (eg. the onClick handler from DropDown.render), add them onto the children
		const childrenWithPassedProps = React.Children.map(children, (child: JSX.Element)=>cloneElement(child, rest));
		return childrenWithPassedProps as JSX.Element[];
	}
}

export class DropDownContent extends BaseComponent<{className?, style?} & React.HTMLAttributes<HTMLDivElement>, {}> {
	render() {
		const {children, className, style, ...rest} = this.props;
		return (
			<div {...rest}className={classNames("dropdown__content", className)} style={E(
				{padding: 10, background: "rgba(0,0,0,.7)", borderRadius: "0 0 0 5px"},
				style,
			)}>
				{children}
			</div>
		);
	}
}