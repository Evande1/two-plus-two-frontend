'use client'
import React, { use, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import CouponList from "./CouponList";
import Loader from "./Loader";

const Search = () => {
  // add button 
  // add display
  const [coupon, setCoupon] = useState([]);
  useEffect(() => {
  },[coupon]);

  const[isLoading, setIsLoading] = useState(false);

  const handleKFCButton = async () => {
    // might need to use ...
    // future hide the endpoint with nextJS environment variables
    
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:3000/api/coupon/kfc`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setCoupon(data);
      setIsLoading(false);
      console.log(JSON.stringify(data));
      console.log(coupon);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBKButton = async () => {
    // might need to use ...
    // future hide the endpoint with nextJS environment variables
    setIsLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:3000/api/coupon/bk`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setCoupon(data);
      setIsLoading(false);
      console.log(JSON.stringify(data));
      console.log(coupon);
    } catch (err) {
      console.log(err);
    }
  };

  const scoopButtonHandler = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(
				`http://localhost:3000/api/coupon/scp`,
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);

			setCoupon(data);
			setIsLoading(false);
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
    <button onClick={scoopButtonHandler}>SCOOP</button>
    <CouponList coupons={coupon} addToFavourites={addToFavourites} isLoading={isLoading}/>
  </div>;
};

export default Search;
