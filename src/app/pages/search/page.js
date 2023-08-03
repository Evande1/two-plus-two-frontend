'use client'
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Search = () => {
  // add button 
  // add display
  const [coupon, setCoupon] = useState([]);
  useEffect(() => {
  },[coupon]);

  const handleKFCButton = async () => {
    // might need to use ...
    // future hide the endpoint with nextJS environment variables
    
    try {
      const { data } = await axios.get(`http://localhost:3000/api/coupon/kfc`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setCoupon(data);
      console.log(JSON.stringify(data));
      console.log(coupon);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBKButton = async () => {
    // might need to use ...
    // future hide the endpoint with nextJS environment variables
    
    try {
      const { data } = await axios.get(`http://localhost:3000/api/coupon/bk`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setCoupon(data);
      console.log(JSON.stringify(data));
      console.log(coupon);
    } catch (err) {
      console.log(err);
    }
  };

  const addToFavourites = async (row) => {
    // might need to use ...
    // future hide the endpoint with nextJS environment variables
    
    try {
      const { data } = await axios.post(`http://localhost:3000/api/coupon/addfavourites`, {
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
    } catch (err) {
      console.log(err);
    }
  };
  

  // const handleKFC;
  return <div>
    <h1>Search Page</h1>
    <button onClick={handleKFCButton}>KFC</button>
    <button onClick={handleBKButton}>BK</button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Favourite</TableCell>
          </TableRow>
        </TableHead>
        {coupon.map((row) => {
          return(
            <TableRow>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.url}</TableCell>
          <TableCell>{row.type}</TableCell>
          <TableCell>{row.expiry}</TableCell>
          <TableCell><button onClick={() => addToFavourites(row)}>Add to Favourites</button></TableCell>
          </TableRow> 
          ); 
        })}
        </Table>
      </TableContainer>
  </div>;
};

export default Search;
