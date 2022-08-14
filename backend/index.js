import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import MongoClient from "mongoose";

const PORT = process.env.PORT || 8000;
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at port ${PORT}`);
});
