const express = require("express")
const router = express.Router()


const { getAllRooms ,
        getOneRoom ,
        addRoom ,
        updateRoom,
        deleteRoom 
    } = require("../controllers/roomsController")


router.route("/AllRooms").get(getAllRooms)

router.route("/OneRoom/:id").get(getOneRoom)

router.route("/AjoutRoom/:id").post(addRoom)


router.route("/UpdateRoom/:id").put(updateRoom)


router.route("/DeleteRoom/:id").delete(deleteRoom)




module.exports = router