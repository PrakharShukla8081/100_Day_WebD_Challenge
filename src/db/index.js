import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async () => {
    try {
       const connectionInstance =await mongoose.connect(`${process.env.MONGO_URI}`)
       console.log(`MongoDb Connected  !! DB Host: ${connectionInstance.connection.host} `);
       
    } catch (error) {
        console.log("MongoDB Connection Error",error);
        process.exit(1)
    }
}
export default connectDB



