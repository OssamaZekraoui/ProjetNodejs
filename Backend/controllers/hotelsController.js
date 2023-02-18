
const mongoose = require("mongoose")
let Hotel = require('../models/hotel')


//----------------GET ALL HOTELS-------------
exports.getAllHotels = async (req, res, next) => {
    const { page = 1, limit = 12 } = req.query
    const hotels = await Hotel.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ _id: 'desc' })
        .exec()
    const count = await Hotel.countDocuments()
    res.status(200).json({
        success: true,
        totalPages: Math.ceil(count / limit),
        hotels
    })
}


//-------------GET ONE HOTEL------------

exports.getHotelById = async (req, res, next) => {
    const hotel = await Hotel.findOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        hotel
    })
}

//-------------ADD HOTEL------------

exports.addHotel = async (req, res) => {
    try {
        const hotel = new Hotel({
            title: req.body.title,
            description: req.body.description,
            city: req.body.city,
            photos: req.file.filename,
            prixbas: req.body.prixbas,
            rating:req.body.rating,
            offers:req.body.offers
        })
        hotel.save()
        res.status(200).json({
            success: "Hotel created successfully",
            hotel
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}



//-------------UPDATE HOTEL------------

exports.updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        })
        res.status(200).json({
            succes: true,
            updatedHotel
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

//-------------DELETE HOTEL------------

exports.deleteHotel = async (req, res, next) => {
    try {
        const deletehotel = await Hotel.deleteOne({
            _id: req.params.id
        })
        res.status(200).json({
            success: true,
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


