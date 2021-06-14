/* import React from "react";
import {BaseComponent, ApplyBasicStyles} from "react-vextensions";
import {Column, Row, RowProps} from "..";
import {ColumnProps} from "./Column.js";

@ApplyBasicStyles
// todo: maybe add rowNoShrink and columnNoShrink
export class RowAndColumn extends BaseComponent<{outerComp?: "Row" | "Column", rowCenter?, columnCenter?, rowStyle?, columnStyle?, rowProps?: Partial<RowProps>, columnProps?: Partial<ColumnProps>}, {}> {
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
} */