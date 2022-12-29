const mongoose = require("mongoose")


const hotelSchema = mongoose.Schema({

   name : {
    type:String,
    required:true,
    trim:true
   },

   type : {
    type:String,
    required:true,
    trim:true
   },

   city : {
    type:String,
    required:false,
    trim:true
   },

   photos : {
      type:[String],
   },

   title : {
      type:String,
      required:false,
      trim:true
   },

   description : {
      type:String,
      required:false,
      trim:true
   },

   rating : {
      type:Number,
      min:0,
      max:5
   },
   
   room : {
      type:[String], //I y a l'erreur dans ce niveau    
   },

   prixbas : {
      type:Number,
      required:false,
      trim:true
   },

   featured : {
      type:Boolean,
      required:false,
      trim:true
   }
})

module.exports = mongoose.model('Hotel',hotelSchema)