import Navbar from "../components/Navbar.jsx";
import Calculator from "../components/Calculator.jsx";
import MutateCurrency from "../sections/MutateCurrency.jsx";

import classes from "../cssModules/MainPage.module.css";
import { useEffect } from "react";
import {useDispatch } from "react-redux";
import { storeCurrencies } from "../stateReducers/currenciesSlice.js";
import { Outlet, useLoaderData } from "react-router-dom";





function MainPage() {
  const dispatch = useDispatch();
  const currencies = useLoaderData();

  
  useEffect(() => {
    dispatch(storeCurrencies(currencies));
  }, [currencies]);


  
  return (
    <>
      <Navbar />
      <div className={classes.titleContainer}>
        <h1 className={classes.h1}>
          <span className={classes.span}>your</span>  Currency <br/> Converter
        </h1>
      </div>
      <Calculator />
      <MutateCurrency />
      <Outlet />
    </>
  )
}

export default MainPage




export const loader = async() => {
  const response = await fetch('http://localhost:3000/currencies');
  const data = await response.json();

  const currenciesArray = Object.values(data);    // Converts the data from 
                                                  // an object to an array
  return currenciesArray;
};