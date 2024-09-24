import express from "express";

import { getCurrencies, convertCurrency, createCurrency, updatedCurrency, deleteCurrency } from "../controllers/currency.js";
import { isAuthenticated } from "../middleware/middleware.js";

const router = express.Router();


// CURRENCY ENDPOINTS
router.get("/currencies", getCurrencies);
router.post("/convert", convertCurrency);
router.post("/createCurrency", isAuthenticated, createCurrency);          //REQUIRES AUTHORIZATION
router.put("/currencies", isAuthenticated, updatedCurrency);              //REQUIRES AUTHORIZATION
router.delete("/deleteCurrency", isAuthenticated, deleteCurrency);        //REQUIRES AUTHORIZATION

export default router;