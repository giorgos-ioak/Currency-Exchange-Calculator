import { getUsers } from "../middleware/middleware.js";
import bcrypt from 'bcrypt';



// CREATING THE COOKIE
const cookieOptions = {
  httpOnly: true, 
  secure: false, 
  nameSite: 'lax',
  maxAge: 60 * 60 * 1000,
};



// LOGGING IN FUNCTION
export async function login(req, res) {
  const { username, password } = req.body;
  const users = getUsers();

  const user = users.find((user) => user.username === username);

  if (user) {
    // COMPARING THE HASHED PASSWORD WITH BCRYPT
    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (isMatch) {
        // SENDING THE COOKIE
        res.cookie('auth', 'loggedin', cookieOptions);      
        // SENDING A TOKEN AS WELL FOR STORING IT IN THE LOCAL STORAGE FOR COMPONENT RENDERING PURPOSES
        return res.json({ message: 'Login successful', token: "myToken" });     

      } else {
        return res.status(401).json({ message: 'Invalid password' });
      }
    });
  } else {
    return res.status(401).json({ message: 'Invalid username' });
  }
};




// LOGGING OUT FUNCTION
export async function logout(req,res) {
  // CLEARING THE COOKIE
  res.clearCookie('auth');

  return res.json({ message: 'Logout successful' });
};


