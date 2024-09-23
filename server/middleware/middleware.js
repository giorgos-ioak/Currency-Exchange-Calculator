import fs from 'fs';



//GETTING THE CURRENCIES FROM THE .json FILE
export function readFile() {
  const fileContent = fs.readFileSync("./database/currencies.json" , "utf-8");          
  const currencies = JSON.parse(fileContent);                                           

  return currencies;
};




//OVERWRITING THE CURRENCIES FROM THE .json FILE
export function writeFile(data) {
  fs.writeFileSync("./database/currencies.json", JSON.stringify(data));                 
};




//GETTING THE USERS FROM THE .json FILE
export function getUsers() {
  const userFile = fs.readFileSync("./database/users.json" , "utf-8");          
  const users = JSON.parse(userFile);                                    

  return users;
};



//CHECKING IF USER IS AUTHENTICATED
export function isAuthenticated(req, res, next) {
  const authCookie = req.cookies.auth;

  console.log('Auth Cookie in isAuthenticated:', authCookie);

  if (authCookie === 'loggedin') {
    return next(); // User is authenticated, proceed to the next middleware/route handler
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};