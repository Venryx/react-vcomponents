import React from "react";
import {BaseComponent} from "react-vextensions";

export class Switch extends BaseComponent<{preferLater?: boolean}, {}> {
	static defaultProps = {preferLater: true};
	render() {
		let {preferLater, children} = this.props;
		let existentChildren = this.FlattenedChildren.filter(a=>!!a) as JSX.Element[];
		return preferLater ? existentChildren[existentChildren.length - 1] : existentChildren[0];
	}
}