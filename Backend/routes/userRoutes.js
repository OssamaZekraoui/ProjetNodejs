const express = require("express")
const router = express.Router()


const { getAllUsers ,
        getOneUser,
        addUser ,
        updateUser,
        deleteUser 
    } = require("../controllers/usersController")


router.route("/AllUsers").get(getAllUsers)

router.route("/OneUser/:id").get(getOneUser)

router.route("/AjoutUser").post(addUser)

router.route("/UpdateUser/:id").put(updateUser)


router.route("/DeleteUser/:id").delete(deleteUser)




module.exports = router