import classes from "../cssModules/InputCurrency.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeSelectedCurrencies } from "../stateReducers/selectedCurrencies.js";

function TargetCurrency({ label, name }) {
  const dispatch = useDispatch();

  const [targetCurrency, setTargetCurrency] = useState("Select an option");
  const currencies = useSelector((state) => state.currencies.value);  

  const allCurrencies = (currencies || []).flatMap((object) => [object.baseCurrency, object.targetCurrency]);
  const uniqueCurrencies = [...new Set(allCurrencies)];


  function handleSelectChange(e) {
    const newTargetCurrency = e.target.value;
    setTargetCurrency(newTargetCurrency);

    dispatch(changeSelectedCurrencies({targetCurrency: newTargetCurrency}));
  };


  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="baseCurrency">{label}</label>
      <select 
        className={classes.inputContainer} 
        name={name} 
        id="baseCurrency"
        value={targetCurrency}
        onChange={handleSelectChange}
      >
        <option disabled>Select an option</option>
        {uniqueCurrencies.map((currency) => (
          <option 
            key={currency} 
            value={currency}
          >
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TargetCurrency