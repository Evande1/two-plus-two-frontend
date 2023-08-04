import React from "react";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CouponList = (props) => {

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell>Link</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Expiry</TableCell>
					</TableRow>
				</TableHead>
				{props.coupons?.map((row) => {
					return (
						<TableRow>
							<TableCell>{row.title}</TableCell>
							<TableCell>{row.url}</TableCell>
							<TableCell>{row.type}</TableCell>
							<TableCell>{row.expiry}</TableCell>
						</TableRow>
					);
				})}
			</Table>
		</TableContainer>
	);
};

export default CouponList;
