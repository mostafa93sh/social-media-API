import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { login } from "../controllers/auth";
const router = express.Router();

router.post("/login", login);

export default router;
