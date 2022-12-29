const express = require("express")
const app = express()

//----------api----------
app.use(express.json())

// Hotels
const hotel = require("./routes/hotelRoutes")
app.use("/api",hotel)

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