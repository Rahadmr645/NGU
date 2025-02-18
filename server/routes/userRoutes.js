import express from "express"
import User from "../models/userModels.js"
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
const router =express.Router();
const SECRET_KEY =process.env.SECRET_KEY;
router.post("/create", async (req,res) => {
  try{
   const {name,email,password} = req.body;
    
   if(!name || !email  || !password ) {
     return res.status(400).json({message:"please fill the field"})
   }
   
   const isExist = await User.findOne({email}) ;
   if(isExist) return  res.status(400).json({message:"User is already exist"})
     const salt = await bcrypt.genSalt(10);
     const hashedPass = await bcrypt.hash(password, salt) ;
     
     const newUser = new User({
       name,
       email,
       password:hashedPass,
     });
     await newUser.save();
     
     const token = JWT.sign({id:
     newUser._id,name:newUser.name,email:newUser.email},
     SECRET_KEY,{expiresIn:"1h"});
     res.status(200).json({message:"User create successfully",newUser,token})
  }catch(error) {
    res.status(400).json({message:"faild to create user",error})
  }
}) ;


export default router;