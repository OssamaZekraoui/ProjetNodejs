const mongoose = require("mongoose")


const hotelSchema = mongoose.Schema({

   title: {
      type: String,
      required: true,
      trim: true
   },
   type: {
      type: String,
      required: false,
      trim: true
   },

   city: {
      type: String,
      required: true,
      trim: true
   },

   offers: {
      type: String,
      required: false,
   },
   photos: {
      type: String,
      required: false
   },

   description: {
      type: String,
      required: true,
      trim: true
   },

   rating: {
      type: Number,
      min: 0,
      max: 5
   },

   rooms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: false
   }],

   prixbas: {
      type: Number,
      required: true,
      trim: true
   },

   featured: {
      type: Boolean,
      required: false,
      trim: true
   }
})

module.exports = mongoose.model('Hotel', hotelSchema)