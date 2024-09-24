import Navbar from "../components/Navbar.jsx";
import Calculator from "../components/Calculator.jsx";
import MutateCurrency from "../sections/MutateCurrency.jsx";

import classes from "../cssModules/MainPage.module.css";
import { useEffect } from "react";
import {useDispatch,} from "react-redux";
import { storeCurrencies } from "../stateReducers/currenciesSlice.js";
import { Outlet, useLoaderData } from "react-router-dom";





function MainPage() {
  const dispatch = useDispatch();

  // GETTING THE DATA FROM THE LOADER FUNCTION
  const currencies = useLoaderData();

  

  // STORING THE CURRENCIES DATA IN THE GLOBAL STATE
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





// FETCHING THE CURRENCIES DATA FROM THE BACKEND
export const loader = async() => {
  const response = await fetch('http://localhost:3000/currencies');
  const data = await response.json();

  return data;
};