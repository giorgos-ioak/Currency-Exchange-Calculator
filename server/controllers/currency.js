import { readFile, writeFile } from "../middleware/middleware.js";



// FETCHING THE CURRENCIES INFO
export function getCurrencies(req,res) {
  const currencies = readFile();

  if(!currencies) {
    return res.json({message: "There are no currencies registered"});
  }

  return res.send(currencies);
};



// CONVERTING THE USER'S AMOUNT TO THE DESIRED CURRERCY
export function convertCurrency(req,res) {
  const currencies = readFile();

  const { baseCurrency, targetCurrency, amount } = req.body;

  const exchangeCurrency = currencies.find((object) => object.baseCurrency == baseCurrency && object.targetCurrency == targetCurrency);

  const rate = exchangeCurrency.rate;
  const convertedAmount = rate * amount;

  return res.status(200).json({ convertedAmount });
}



// CREATING A NEW CURRENCY
export function createCurrency(req,res) {
  const currencies = readFile();

  const { baseCurrency, targetCurrency, rate } = req.body;   
  
  const exchangeCurrency = currencies.find((object) => object.baseCurrency == baseCurrency && object.targetCurrency == targetCurrency);

  if(exchangeCurrency) {
    return res.json({message: "This exchange currency already exists."})
  };

  const newExchangeCurrency = { baseCurrency, targetCurrency, rate }

  const updatedCurrencies = [...currencies, newExchangeCurrency]
  writeFile(updatedCurrencies);

  return res.status(200).json({ message: "Currency Created" , currency: newExchangeCurrency});
}




// UPDATING AN EXISTING CURRENCY
export function updatedCurrency(req,res) {
  const currencies = readFile();

  const { baseCurrency, targetCurrency, rate } = req.body;   
  
  const exchangeCurrency = currencies.find((object) => object.baseCurrency == baseCurrency && object.targetCurrency == targetCurrency);

  if(!exchangeCurrency) {
    return res.json({message: "This currency does not exist."})
  };

  exchangeCurrency.rate = rate;

  writeFile(currencies);
  return res.status(200).json({message: "Updated the currency's rate" , currency: exchangeCurrency});
}




// DELETING AN EXISTING CURRENCY
export function deleteCurrency(req,res) {
  const currencies = readFile();
  
  const { baseCurrency, targetCurrency } = req.body;

  const selectedCurrency = currencies.find((object) => object.baseCurrency == baseCurrency && object.targetCurrency == targetCurrency);
  
  if(!selectedCurrency) {
    return res.json({message: "This currency does not exist."})
  }

  const updatedCurrencies = currencies.filter((object) => object !== selectedCurrency);

  writeFile(updatedCurrencies);
  return res.status(200).json({message: `Successfully deleted the currency.`})
}