const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const { getAllHotels,
    getHotelById,
    addHotel,
    updateHotel,
    deleteHotel
} = require("../controllers/hotelsController")

//-------------------storages----------------
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Backend//images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: Storage })
//--------------------routes----------------
router.route("/AllHotels").get(getAllHotels)

router.route("/OneHotel/:id").get(getHotelById)

router.post("/AjoutHotel", upload.single('pic'), addHotel)

router.route("/UpdateHotel/:id").put(updateHotel)


router.route("/DeleteHotel/:id").delete(deleteHotel)




module.exports = router