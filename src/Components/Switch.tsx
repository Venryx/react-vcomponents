import {BaseComponent} from "react-vextensions";

export default class Switch extends BaseComponent<{}, {}> {
	render() {
		let {children} = this.props;
		let firstChild = (children as Array<any>).find(a=>!!a);
		return firstChild;
	}
}