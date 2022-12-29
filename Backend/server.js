const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


//-----------PORT-----------
dotenv.config({path:'./Backend/config/config.env'})
PORT = process.env.PORT

//---------Connect database----------
DB = process.env.db_con
mongoose.connect(DB, () => {
    console.log("Database connected")
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})