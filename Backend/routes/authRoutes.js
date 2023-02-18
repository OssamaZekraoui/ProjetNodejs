const express = require("express")
const router = express.Router()


const {register, login} = require("../controllers/authController")

router.route("/register").post(register)
router.route("/login").get(login)




module.exports = router