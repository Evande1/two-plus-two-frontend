import React from "react";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Loader from "./Loader";

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
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        {!props.isLoading && props.coupons?.map((row) => {
          return(
            <TableRow hover={true}>
          <TableCell>{row.title}</TableCell>
          <TableCell><Link href={row.url} target="_blank" rel="noopener noreferrer" underline="hover">{row.url}</Link></TableCell>
          <TableCell>{row.type}</TableCell>
          <TableCell>{row.expiry}</TableCell>
          <TableCell><Button variant="contained" onClick={() => props.addToFavourites(row)}>Add to Favourites</Button></TableCell>
          </TableRow> 
          ); 
        })}
        {props.isLoading && <Loader/>}
        </Table>
      </TableContainer>
	);
};

export default CouponList;
