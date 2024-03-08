import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({
  path: "src/.env",
});
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async function () {
  try {
    const connectionStatus = await mongoose.connect(MONGO_URI);
    console.log("mongo db connection successfull");
  } catch (err) {
    console.log("MongoDB Connection Error");
  }
};

export default connectDB;
