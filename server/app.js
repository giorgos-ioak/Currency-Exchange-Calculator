const cors = require('cors');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());




function readFile() {
  const fileContent = fs.readFileSync("./database/currencies.json" , "utf-8");          // METHOD FOR READING THE 
  const currencies = JSON.parse(fileContent);                                           // 'currencies.json' Database FILE.

  return currencies;
};

readFile();


function writeFile(data) {
  fs.writeFileSync("./database/currencies.json", JSON.stringify(data));                 // METHOD FOR WRITING THE 'currencies.json' Database FILE.
};





app.get("/currencies" , (req,res) => {          //// DONE
  const currencies = readFile();

  if(!currencies) {
    return res.json({message: "There are no currencies registered"});
  }

  return res.send(currencies);
});



// app.get("/currencies/:name" , (req,res) => {     
//   const currencies = readFile();
//   const name = req.params.name;

//   if(!currencies[name]) {
//     return res.json({message: "This currency does not exist"});
//   }

//   const currency = data[name];
//   return res.send(currency);
// });



app.post("/convert" , (req,res) => {            
  const currencies = readFile();

  const { baseCurrency, targetCurrency, amount } = req.body;

  const exchangeCurrency = currencies.find((object) => object.baseCurrency == baseCurrency && object.targetCurrency == targetCurrency);

  const rate = exchangeCurrency.rate;
  const convertedAmount = rate * amount;

  return res.status(200).json({ convertedAmount });
}); 




app.post("/createCurrency" , (req,res) => {
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
});




app.put("/currencies/:name" , (req,res) => {
  const currencies = readFile();

  const name = req.params.name;
  const { rate } = req.body;

  if(!currencies[name]) {
    return res.json({message: "This currency does not exist."})
  };

  currencies[name].rate = rate;

  writeFile(currencies);
  return res.status(200).json({message: "Updated the currency's rate" , currency: currencies[name]});
});




app.delete("/currencies/:name" , (req,res) => {
  const currencies = readFile();
  const name = req.params.name;
  
  if(!currencies[name]) {
    return res.json({message: "This currency does not exist."})
  }

  delete currencies[name];

  writeFile(currencies);
  return res.status(200).json({message: `Successfully deleted the currency.`})
});






app.listen(port, () => {
  console.log("Server running on port " + port);
});
