const mongoose = require("mongoose")
let Room = require("../models/room")
let Hotel = require("../models/hotel")





//----------------GET ALL ROOMS-------------
exports.getAllRooms = async (req,res,next)=>{
    const rooms = await Room.find()
    res.status(200).json({
    success:true,
    nombre:rooms.length,
    rooms
    })
}


//-------------GET ONE ROOM------------

exports.getOneRoom = async (req,res,next) => {
   const room = await Room.findOne({
    _id:req.params.id
   })
   res.status(200).json({
    success:true,
    room
   })
}



//-------------UPDATE ROOM------------

exports.updateRoom = async(req,res,next) => {
    try {
        const updatedRoom = await Room.updateOne({
            _id:req.params.id
        },{
            $set:req.body
        })
        res.status(200).json({
            succes:true,
            updatedRoom
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

//-------------DELETE ROOM------------

exports.deleteRoom = async (req,res,next) => {
    try{
        const deletehotel = await Room.deleteOne({
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


