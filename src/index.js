import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path:'./env'
})

connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000, ()=>{
  console.log(`Sever is Running on ${process.env.PORT}` )
  
})
})
.catch((err)=>{
  console.log("MongoDb Connection is Failed" ,err)
  
})

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