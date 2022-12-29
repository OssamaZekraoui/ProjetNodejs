
const mongoose = require("mongoose")
let Hotel = require('../models/hotel') 


//----------------GET ALL HOTELS-------------
exports.getAllHotels = async (req,res,next)=>{
    const hotels = await Hotel.find()
    res.status(200).json({
    success:true,
    nombre:hotels.length,
    hotels
    })
}


//-------------GET ONE HOTEL------------

exports.getOneHotel = async (req,res,next) => {
   const hotel = await Hotel.findOne({
    _id:req.params.id
   })
   res.status(200).json({
    success:true,
    hotel
   })
}

//-------------ADD HOTEL------------

exports.addHotel = async (req, res, next) => {
    const hotel = new Hotel (req.body)
    try {
        await hotel.save()
        res.status(200).json({
            success: true,
            hotel
        })
    }catch(e){
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}



//-------------UPDATE HOTEL------------

exports.updateHotel = async(req,res,next) => {
    try {
        const updatedHotel = await Hotel.updateOne({
            _id:req.params.id
        },{
            $set:req.body
        })
        res.status(200).json({
            succes:true,
            updatedHotel
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

//-------------DELETE HOTEL------------

exports.deleteHotel = async (req,res,next) => {
    try{
        const deletehotel = await Hotel.deleteOne({
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


