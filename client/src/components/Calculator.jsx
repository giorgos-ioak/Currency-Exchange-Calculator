import classes from "../cssModules/Calculator.module.css";

import ExchangeRateInput from "./ExchangeRateInput.jsx";
import BaseCurrency from "./BaseCurrency.jsx";
import TargetCurrency from "./TargetCurrency.jsx";
import AmountInput from "./AmountInput.jsx";
import { useState } from "react";  

function Calculator() {      

  const [convertedAmount, setConvertedAmount] = useState("");

  console.log(convertedAmount);


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Get converted amount
      const response = await fetch(`http://localhost:3000/convert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          baseCurrency: data.baseCurrency,
          targetCurrency: data.targetCurrency,
          amount: data.amount
        })
      });

      if (!response.ok) {
        throw new Error('Failed to convert the amount');
      }

      const result = await response.json();
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
            <BaseCurrency label="From" name="baseCurrency"/>
            <ExchangeRateInput title="Exchange Rate" name="baseCurrencyRate"/>
            <div className={classes.buttonContainer}>
              <label className={classes.label}>Yeah</label>
              <button className={classes.btn}>Convert</button>
            </div>
          </div>

          <div className={classes.secondColumn}>
            <TargetCurrency label="To" name="targetCurrency"/>
            <AmountInput title="Amount" name="amount"/>  
          </div>
        </div>
      </form>

      <div className={classes.resultContainer}>
        <label>Result</label>
        <input className={classes.inputContainer} defaultValue={convertedAmount}/>
      </div>      
    </section>
  )
}

export default Calculator;
