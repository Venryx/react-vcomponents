import React from "react";
import {BaseComponent} from "react-vextensions";

export class Switch extends BaseComponent<{preferLater?: boolean}, {}> {
	static defaultProps = {preferLater: true};
	render() {
		let {preferLater, children} = this.props;
		let existentChildren = (children as Array<any>).filter(a=>!!a);
		return preferLater ? existentChildren[existentChildren.length - 1] : existentChildren[0];
	}
}