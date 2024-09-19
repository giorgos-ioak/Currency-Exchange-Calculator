const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());




function readFile() {
  const fileContent = fs.readFileSync("./database/currencies.json" , "utf-8");          // METHOD FOR READING THE 
  const currencies = JSON.parse(fileContent);                                           // 'currencies.json' Database FILE.

  return currencies;
};



function writeFile(data) {
  fs.writeFileSync("./database/currencies.json", JSON.stringify(data));                 // METHOD FOR WRITING THE 'currencies.json' Database FILE.
};





app.get("/currencies" , (req,res) => {
  const currencies = readFile();

  if(!currencies) {
    return res.json({message: "There are no currencies registered"});
  }

  return res.send(currencies);
});



app.get("/currencies/:name" , (req,res) => {     
  const currencies = readFile();
  const name = req.params.name;

  if(!currencies[name]) {
    return res.json({message: "This currency does not exist"});
  }

  const currency = data[name];
  return res.send(currency);
});



app.get("/convert" , (req,res) => {            
  const currencies = readFile();

  const { baseCurrency } = req.body;
  const { targetCurrency } = req.body;
  const { amount } = req.body;


  const baseRate = currencies[baseCurrency].rate;
  const targetRate = currencies[targetCurrency].rate;
  const convertedAmount = (amount / baseRate) * targetRate;

  return res.status(200).json({convertedAmount});
}); 




app.post("/createCurrency" , (req,res) => {
  const currencies = readFile();

  const { name } = req.body;              
  const { rate } = req.body;             

  if(currencies[name]) {
    return res.json({message: "This currency already exists."})
  };

  currencies[name] = { name, rate };
  writeFile(currencies);

  return res.status(200).json({ message: "Currency Created" , currency: currencies[name]});
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
