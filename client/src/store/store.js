import { configureStore } from "@reduxjs/toolkit";

import currenciesReducer from "../stateReducers/currenciesSlice.js";
import selectedCurrenciesReducer from "../stateReducers/selectedCurrencies.js";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    selectedCurrencies: selectedCurrenciesReducer
  }
})