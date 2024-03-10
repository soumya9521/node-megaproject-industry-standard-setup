import app from "./app.js";
import connectDB from "./db/connect-db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "src/.env",
}); // Path of dotenv should be relative  to the project folder path not the server.js
const PORT = process.env.PORT || 4000;

connectDB();
app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});
