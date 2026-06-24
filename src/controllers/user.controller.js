import {asyncHandler} from "../utils/asyncHandler.js"



const registerUser = asyncHandler(async (req, res)=>{
   // get user details from frontend
   // validation - not empty
   // check if user already exists: username, email
   // check for images , check for avtar
   // upload them to cloudnary, avtar
   // create user object - create entry in db
   // remove password and refresh token from field
   // check for user creation 
   // refresh token 
   
     const {fullname,email, username, password } = req.body
        console.log("Email============================= :", email);
        
})

export {registerUser}
