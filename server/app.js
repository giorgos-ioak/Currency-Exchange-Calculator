const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());




function readFile() {
  const fileContent = fs.readFileSync("./database/currencies.json" , "utf-8");          // METHOD FOR READING THE 'currencies.json' Database FILE.
  const currencies = JSON.parse(fileContent);

  return currencies;
};



function writeFile(data) {
  fs.writeFileSync("./database/currencies.json", JSON.stringify(data));                 // METHOD FOR WRITING THE 'currencies.json' Database FILE.
};





// app.get("/currencies" , (req,res) => {             // APP.GET
//   const data = readFile();
//   res.send(data);
// });



// app.get("/currencies/:name" , (req,res) => {      // APP.GET
//   const name = req.params.name;
//   const data = readFile();

//   const currency = data[name];
//   return res.send(currency);
// });



// app.get("/convert" , (req,res) => {            // APP.POST
//   const currencies = readFile();

//   const baseCurrency = "USD";                  // FIXED VALUES
//   const targetCurrency = "EUR";                 // WILL CHANGE LATER
//   const amount = 1;

//   const baseRate = currencies[baseCurrency].rate;
//   const targetRate = currencies[targetCurrency].rate;
//   const convertedAmount = (amount / baseRate) * targetRate;

//   res.status(200).json({convertedAmount});
// }); 




// app.get("/createCurrency" , (req,res) => {                // APP.POST
//   const currencies = readFile();    
//   const name = "PPP";               // FIXED VALUES 
//   const rate = 1.3552;              // WILL CHANGE LATER

//   if(currencies[name]) {
//     return res.json({message: "This currency already exists."})
//   };

//   currencies[name] = { name, rate };
//   writeFile(currencies);

//   res.status(200).json({ message: "Currency Created" , currency: currencies[name]});
// });




// app.get("/currencies/:name" , (req,res) => {             // APP.PUT
//   const currencies = readFile();
  
//   const name = req.params.name;
//   const rate = 1.5345;               // FIXED VALUE 
//                                      // WILL CHANGE LATER

//   currencies[name].rate = rate;

//   writeFile(currencies);
//   res.status(200).json({message: "Updated the currency's rate" , currency: currencies[name]});
// });




// app.get("/currencies/:name" , (req,res) => {              // APP.DELETE
//   const currencies = readFile();
//   const name = req.params.name;
  
//   if(!currencies[name]) {
//     return res.json({message: "This currency does not exist."})
//   }

//   delete currencies[name];

//   writeFile(currencies);
//   res.status(200).json({message: `Successfully deleted the currency.`})
// });






app.listen(port, () => {
  console.log("Server running on port " + port);
});
