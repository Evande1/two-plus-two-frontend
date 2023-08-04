'use client'
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getFavourites();
  }, [])

  const getFavourites = async () => {
    // might need to use ...
    // future hide the endpoint with nextJS environment variables
    
    try {
      const { data } = await axios.get(`http://localhost:3000/api/coupon/getfavourites`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log(JSON.stringify(data));
      setFavourites(data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFavourites = async (row) => {
      // might need to use ...
    // future hide the endpoint with nextJS environment variables
    
    try {
      const { data } = await axios.post(`http://localhost:3000/api/coupon/removefavourites`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        title: row.title,
        type: row.type,
        url: row.url,
        expiry: row.expiry,
      });

      console.log(JSON.stringify(data))
      getFavourites();
    } catch (err) {
      console.log(err);
    }
  };

  return <div>
  <h1>Favourites Page</h1>
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
      {favourites.map((row) => {
        return(
          <TableRow>
        <TableCell>{row.title}</TableCell>
        <TableCell><a href={row.url} target="_blank" rel="noopener noreferrer" className="link">{row.url}</a></TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{row.expiry}</TableCell>
        <TableCell><Button variant="contained" onClick={() => removeFavourites(row)}>Remove</Button></TableCell>
        </TableRow>
        ); 
      })}
      </Table>
    </TableContainer>
</div>;
};

export default Favourites;
