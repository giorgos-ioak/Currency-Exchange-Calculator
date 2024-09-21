import { useEffect, useState } from "react";
import classes from "../cssModules/ExchangeRateInput.module.css";

import { useSelector } from "react-redux";


function ExchangeRateInput({title, name}) {
  const [exchangeRate, setExchangeRate] = useState(null);     // State for storing the rate

  const currencies = useSelector((state) => state.currencies.value);      // Get the all the currencies
  const selectedCurrencies = useSelector((state) => state.selectedCurrencies.value);



  useEffect(() => {
    if(name == "baseCurrencyRate") {
      const currencyName = selectedCurrencies.baseCurrency;
      const currency = currencies.find((currency) => currency.name == currencyName);

      if(currency) {
        setExchangeRate(currency.rate);
      }
    } else if(name == "targetCurrencyRate") {
      const currencyName = selectedCurrencies.targetCurrency;
      const currency = currencies.find((currency) => currency.name == currencyName);

      if(currency) {
        setExchangeRate(currency.rate);
      }
    }
  }, [selectedCurrencies, currencies, name]);


  function handleInputChange(e) {
    setExchangeRate(e.target.value);
  };

  return (
    <div className={classes.container}>
      <label className={classes.label}>{title ? title : ""}</label>
      <input 
        className={classes.inputContainer} 
        name={name}
        type="number"
        required
        value={exchangeRate || ""}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default ExchangeRateInput