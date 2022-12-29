const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
let User = require('../models/user') 
 


//-----------------register---------------------

exports.register = async(req,res,next) => {
     try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: hash
        })

        await newUser.save()
        res.status(200).send("The user has been created successfully")
        
     }catch(e){
        res.status(400).json({
            success: false,
            message: e.message
        })   
    }  
}

// ---------------login-------------------

exports.login = async(req,res,next) => {
    try{
       
        const user = await User.findOne({
            username:req.body.username
           })

           if(!user)
           return next(createError(404,"User not found"))

           const isPasswordCorrect = await bcrypt.compare(req.body.password , user.password)
           if(!isPasswordCorrect)
            return next(createError(404,"Password or Username is incorrect"))
       res.status(200).send(user)
       
    }catch(e){
       res.status(400).json({
           success: false,
           message: e.message
       })   
   }  
}