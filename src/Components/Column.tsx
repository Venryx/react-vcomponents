import {BaseComponent, ApplyBasicStyles} from "react-vextensions";

@ApplyBasicStyles
export default class Column extends BaseComponent<{style?} & React.HTMLProps<HTMLDivElement>, {}> {
	render() {
		let {style, ...rest} = this.props;
		return <div {...rest} style={E({display: "flex", flexDirection: "column", flexShrink: 0}, style)}/>
	}
}