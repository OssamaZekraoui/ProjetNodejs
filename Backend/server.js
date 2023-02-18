const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors')


//-----------PORT-----------
dotenv.config({path:'./Backend/config/config.env'})
PORT = process.env.PORT

//---------Connect database----------
DB = process.env.db_con
mongoose.connect(DB, () => {
    console.log("Database connected")
})

//--------------Cors---------------
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,OPTIONS",
    }))
    

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})