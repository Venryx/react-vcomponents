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
import { cloneElement } from "react";
import { BaseComponent, AddGlobalStyle, GetDOM } from "react-vextensions";
import React from "react";
import classNames from "classnames";
import { E } from "../Internals/FromJSVE.js";
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
// avoiding BaseComponentPlus for now, since seems to cause error when used in parent project (need to investigate)
//export class DropDown extends BaseComponentPlus({} as {className?, onShow?, onHide?, active?: boolean} & HTMLProps_Fixed<"div">, {active: false}) {
export class DropDown extends BaseComponent {
    constructor() {
        super(...arguments);
        this.OnWindowClick = (event) => {
            const dropdownElement = GetDOM(this);
            if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.IsActive()) {
                this.Hide();
            }
        };
        this.OnToggleClick = (event) => {
            event.preventDefault();
            if (this.IsActive()) {
                this.Hide();
            }
            else {
                this.Show();
            }
        };
    }
    ComponentDidMount() {
        window.addEventListener("click", this.OnWindowClick);
        window.addEventListener("touchstart", this.OnWindowClick);
    }
    ComponentWillUnmount() {
        window.removeEventListener("click", this.OnWindowClick);
        window.removeEventListener("touchstart", this.OnWindowClick);
    }
    IsActive() {
        return this.props.active != null ? this.props.active : this.state.active;
    }
    Show() {
        let { onShow } = this.props;
        this.SetState({
            active: true
        }, () => {
            if (onShow)
                onShow();
        });
    }
    Hide() {
        let { onHide } = this.props;
        this.SetState({
            active: false
        }, () => {
            if (onHide)
                onHide();
        });
    }
    render() {
        const { children, className } = this.props;
        // create component classes
        const active = this.IsActive();
        // stick callback on trigger element
        const boundChildren = React.Children.map(children, (child) => {
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
        const cleanProps = Object.assign({}, this.props);
        delete cleanProps.active;
        delete cleanProps.onShow;
        delete cleanProps.onHide;
        return (React.createElement("div", Object.assign({}, cleanProps, { className: classNames("dropdown", { "dropdown--active": active }, className) }), boundChildren));
    }
}
DropDown.defaultState = { active: false };
//export class DropDownTrigger extends BaseComponent<{className?} & HTMLProps_Fixed<"div">, {}> {
export class DropDownTrigger extends BaseComponent {
    render() {
        /* const {children, className, ...rest} = this.props;
        return (
            <div {...rest} className={classNames("dropdown__trigger", className)}>
                {children}
            </div>
        ); */
        const _a = this.props, { children } = _a, rest = __rest(_a, ["children"]);
        // whatever properties were passed to this DropDownTrigger (eg. the onClick handler from DropDown.render), add them onto the children
        const childrenWithPassedProps = React.Children.map(children, (child) => cloneElement(child, rest));
        return childrenWithPassedProps;
    }
}
export class DropDownContent extends BaseComponent {
    render() {
        const _a = this.props, { children, className, style, title } = _a, rest = __rest(_a, ["children", "className", "style", "title"]);
        return (React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, className: classNames("dropdown__content", className), style: E({ padding: 10, background: "rgba(0,0,0,.7)" }, style) }), children));
    }
}
