import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    baseCurrency: "",
    targetCurrency: ""
  }
};


// SELECTED CURRENCY SLICE
export const selectedCurrenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    changeSelectedCurrencies: (state, action) => {
      state.value = {...state.value, ...action.payload};
    }
  }
});


export const { changeSelectedCurrencies } = selectedCurrenciesSlice.actions;
export default selectedCurrenciesSlice.reducer;