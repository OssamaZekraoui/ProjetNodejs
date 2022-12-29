const express = require("express")
const router = express.Router()


const { getAllHotels ,
        getOneHotel ,
        addHotel ,
        updateHotel,
        deleteHotel 
    } = require("../controllers/hotelsController")


router.route("/AllHotels").get(getAllHotels)

router.route("/OneHotel/:id").get(getOneHotel)

router.route("/AjoutHotel").post(addHotel)

router.route("/UpdateHotel/:id").put(updateHotel)


router.route("/DeleteHotel/:id").delete(deleteHotel)




module.exports = router