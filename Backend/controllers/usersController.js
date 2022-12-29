
const mongoose = require("mongoose")
let User = require('../models/user') 


//----------------GET ALL USERS-------------
exports.getAllUsers = async (req,res,next)=>{
    const users = await User.find()
    res.status(200).json({
    success:true,
    nombre:users.length,
    users
    })
}


//-------------GET ONE USER------------

exports.getOneUser= async (req,res,next) => {
   const user = await User.findOne({
    _id:req.params.id
   })
   res.status(200).json({
    success:true,
    user
   })
}

//-------------ADD USER------------

exports.addUser = async (req, res, next) => {
    const user = new User (req.body)
    try {
        await user.save()
        res.status(200).json({
            success: true,
            user
        })
    }catch(e){
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}



//-------------UPDATE USER------------

exports.updateUser = async(req,res,next) => {
    try {
        const updatedUser = await User.updateOne({
            _id:req.params.id
        },{
            $set:req.body
        })
        res.status(200).json({
            succes:true,
            updatedUser
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

//-------------DELETE USER------------

exports.deleteUser = async (req,res,next) => {
    try{
        const deleteUser = await User.deleteOne({
            _id:req.params.id
        })
        res.status(200).json({
            success:true,
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}


