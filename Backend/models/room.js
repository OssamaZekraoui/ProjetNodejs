const mongoose = require("mongoose")


const roomSchema = mongoose.Schema({

   title : {
    type:String,
    required:true,
    trim:true
   },

   price : {
    type:Number,
    required:true,
    trim:true
   },

   maxPoeple : {
    type:Number,
    required:true,
    trim:true
   },
   
   description : {
    type:String,
    required:false,
    trim:true
    },
    hotel:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hotel"
    },

   roomNumbers : {
      type:Number,
      required:true
   }
},
   {timestamps :  true}
)


/*
[
    { number:101,unavailableDates : [01.05.2022,02.05.2022]}
    { number:102,unavailableDates : []}
    { number:103,unavailableDates : []}
    { number:104,unavailableDates : []}
    { number:105,unavailableDates : []}

]
*/


module.exports = mongoose.model('Room',roomSchema)

