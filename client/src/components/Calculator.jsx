import classes from "../cssModules/Calculator.module.css";

import ExchangeRateInput from "./exchangeRateInput.jsx";
import BaseCurrency from "./BaseCurrency.jsx";
import TargetCurrency from "./TargetCurrency.jsx";
import AmountInput from "./AmountInput.jsx";
import { useState } from "react";  

function Calculator() {      

  const [convertedAmount, setConvertedAmount] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Update baseCurrencyRate
      const response1 = await fetch(`http://localhost:3000/currencies/${data.baseCurrency}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rate: Number(data.baseCurrencyRate) })
      });

      if (!response1.ok) {
        throw new Error('Failed to update the baseCurrencyRate');
      }

      // Update targetCurrencyRate
      const response2 = await fetch(`http://localhost:3000/currencies/${data.targetCurrency}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rate: Number(data.targetCurrencyRate) })
      });

      if (!response2.ok) {
        throw new Error('Failed to update the targetCurrencyRate');
      }

      // Get converted amount
      const response3 = await fetch(`http://localhost:3000/convert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          baseCurrency: data.baseCurrency,
          targetCurrency: data.targetCurrency,
          amount: data.amount
        })
      });

      if (!response3.ok) {
        throw new Error('Failed to convert the amount');
      }

      const result = await response3.json();
      setConvertedAmount(result.convertedAmount); // Set converted amount
    } catch (err) {
      return {error: err.message}; // Set error message if any
    }
  };



  return (
    <section className={classes.mainContainer}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div className={classes.firstColumn}>
            <BaseCurrency defaultCurrency="EUR" label="From" name="baseCurrency"/>
            <ExchangeRateInput title="Exchange Rate" name="baseCurrencyRate"/>
            <AmountInput title="Amount" name="amount"/>
          </div>

          <div className={classes.secondColumn}>
            <TargetCurrency defaultCurrency="USD" label="To" name="targetCurrency"/>
            <ExchangeRateInput title="Exchange Rate" name="targetCurrencyRate"/>
            <div className={classes.buttonContainer}>
              <label className={classes.label}>Yeah</label>
              <button className={classes.btn}>Convert</button>
            </div>
          </div>
        </div>
      </form>

      <div className={classes.resultContainer}>
        <label>Result</label>
        <input className={classes.inputContainer} defaultValue={convertedAmount}/>
        <p>**All exchange rates are relative to $1.00 USD.**</p>
      </div>      
    </section>
  )
}

export default Calculator;
