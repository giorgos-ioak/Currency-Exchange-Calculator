import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null
};


// CURRENCIES SLICE
export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    storeCurrencies: (state, action) => {
      state.value = action.payload;
    }
  }
});


export const { storeCurrencies } = currenciesSlice.actions;
export default currenciesSlice.reducer;