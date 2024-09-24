import express from "express";
import { login, logout } from "../controllers/auth.js";

const router = express.Router();


// AUTH ENDPOINTS
router.post("/login" , login);
router.get("/logout" , logout);


export default router;