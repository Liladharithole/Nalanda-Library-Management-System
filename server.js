import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import mongoose from "mongoose";

// config dotenv
dotenv.config();
// connect to database
connectDB();
const app = express();
// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Nalanda Library Management System");
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));