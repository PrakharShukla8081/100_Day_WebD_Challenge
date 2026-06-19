import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})

connectDB()

/*
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});



import express from "express";

const app = express();

(async () => {
  try {
    console.log("------------------------",process.env.MONGO_URI);
    await mongoose.connect(`${process.env.MONGO_URI}`);

    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR:", error);
    throw error;
  }
})();

*/