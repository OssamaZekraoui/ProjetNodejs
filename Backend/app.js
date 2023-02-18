const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")

//-------------cors-----------------
app.use(cors({
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    origin: "http://localhost:3000"
  }))
  
//----------api----------
app.use(express.json())

// Hotels
const hotel = require("./routes/hotelRoutes")
app.use("/api",hotel)

//Photos
app.use('/images',express.static(path.join(__dirname+'/images')))

//Auth
const auth = require("./routes/authRoutes")
app.use("/api",auth)

//Users
const user = require("./routes/userRoutes")
app.use("/api",user)

//Rooms
const room = require("./routes/roomRoutes")
app.use("/api",room)





module.exports = app