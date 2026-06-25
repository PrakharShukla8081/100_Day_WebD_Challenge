import {v2 as clodinary} from "cloudinary"
import { log } from "console";
import fs from "fs"

clodinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null
        //upload the file on clodinary
        clodinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        } )
        // file has been uploaded successfully
        console.log("File is uploaded on clodinary",
        response.url);
        return response;
            
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved
        //  temporary file as the upload opertion got failed
        return null;
    }
}
export {uploadOnCloudinary}







