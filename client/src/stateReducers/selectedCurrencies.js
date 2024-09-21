import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    baseCurrency: "",
    targetCurrency: ""
  }
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    changeSelectedCurrencies: (state, action) => {
      state.value = {...state.value, ...action.payload};
    }
  }
});


export const { changeSelectedCurrencies } = currenciesSlice.actions;
export default currenciesSlice.reducer;