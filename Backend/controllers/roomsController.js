const mongoose = require("mongoose")
let Room = require("../models/room")
let Hotel = require("../models/hotel")





//----------------GET ALL ROOMS-------------
exports.getAllRooms = async (req,res,next)=>{
    const rooms = await Room.find().populate('hotel')
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

//-------------ADD ROOM------------

exports.addRoom = async (req, res, next) => {
    const {title,price,maxPoeple,description,roomNumbers}=req.body
    const hotel = req.params.id
    const room = await new Room({title,price,maxPoeple,description,hotel,roomNumbers})
    try {
        await room.save()
        const hotelRoom = await Hotel.findById(hotel)
        hotelRoom.rooms.push(room)
        hotelRoom.save();
        res.status(200).json({
            success: true,
            room
        })
    }catch(e){
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
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


