import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const DBconnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error while connected to database", error.message);
  }
};
