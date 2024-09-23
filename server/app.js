import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';


import authRoutes from "./routes/auth.js";
import currencyRoutes from "./routes/currency.js";


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));
app.use(cookieParser());







//ROUTES
app.use('/', currencyRoutes);
app.use('/auth', authRoutes);





app.listen(port, () => {
  console.log("Server running on port " + port);
});
