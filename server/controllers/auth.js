import { getUsers } from "../middleware/middleware.js";
import bcrypt from 'bcrypt';


const cookieOptions = {
  httpOnly: true, // Makes cookie inaccessible to client-side JavaScript
  secure: false,  // Should be set to true in production (requires HTTPS)
  nameSite: 'lax',
  maxAge: 60 * 60 * 1000, // 1 hour
};




export async function login(req, res) {
  const { username, password } = req.body;
  const users = getUsers();

  const user = users.find((user) => user.username === username);

  if (user) {
    // Compare the password with the hashed password in the JSON file
    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (isMatch) {
        res.cookie('auth', 'loggedin', cookieOptions);
        return res.json({ message: 'Login successful' });   

      } else {
        return res.status(401).json({ message: 'Invalid password' });
      }
    });
  } else {
    return res.status(401).json({ message: 'Invalid username' });
  }
};



export async function logout(req,res) {
  res.clearCookie('auth');

  return res.json({ message: 'Logout successful' });
};










// export async function login(req, res) {
//   const { username, password } = req.body;

//   const users = getUsers();

  // Check if username is the same
//   const user = users.find((user) => user.username === username);

//   if (user) {
//     // Compare the password with the hashed password in the JSON file
//     bcrypt.compare(password, user.password, function(err, isMatch) {
//       if (isMatch) {
//         const token = jwt.sign({ id: user.id }, 'secret');

//         res.cookie('token', token, {
//           httpOnly: true,  // Cookie is not accessible via JS (helps prevent XSS)
//           secure: process.env.NODE_ENV === 'production',  // Send only over HTTPS in production
//           maxAge: 60 * 60 * 1000,  // 1 hour expiration
//           sameSite: 'Strict'  // Prevent CSRF attacks
//         });
        
//         res.status(200).json({ token , user});
//       } else {
//         return res.status(401).json({ message: 'Invalid password' });
//       }
//     });
//   } else {
//     return res.status(401).json({ message: 'Invalid username' });
//   }
// };




// export async function logout(req,res) {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).json({ message: 'Failed to log out.' });
//     }
    
//     // Clear session cookie
//     res.clearCookie('connect.sid');
//     console.log(req.session);
//     return res.json({ message: 'Logout successful' });
//   });
// };



