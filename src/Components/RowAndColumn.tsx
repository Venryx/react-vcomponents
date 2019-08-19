import React from "react";
import {BaseComponent, ApplyBasicStyles, E} from "react-vextensions";
import {Column, Row} from "..";

@ApplyBasicStyles
// todo: maybe add rowNoShrink and columnNoShrink
export class RowAndColumn extends BaseComponent<{outerComp?: "Row" | "Column", rowCenter?, columnCenter?, rowStyle?, columnStyle?, rowProps?, columnProps?} & React.HTMLAttributes<HTMLDivElement>, {}> {
	static defaultProps = {outerComp: "Row"};
	render() {
		let {outerComp, rowCenter, columnCenter, rowStyle, columnStyle, rowProps, columnProps, children, ...rest} = this.props;
		rowProps = rowProps || {};
		columnProps = columnProps || {};

		if (outerComp == "Row") {
			return (
				<Row {...rowProps} center={rowCenter} style={rowStyle}>
					<Column {...columnProps} center={columnCenter} style={columnStyle}>
						{children}
					</Column>
				</Row>
			);
		}
		return (
			<Column {...columnProps} center={columnCenter} style={columnStyle}>
				<Row {...rowProps} center={rowCenter} style={rowStyle}>
					{children}
				</Row>
			</Column>
		);
	}
}