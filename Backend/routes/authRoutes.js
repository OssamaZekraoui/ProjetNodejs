const express = require("express")
const router = express.Router()


const {register} = require("../controllers/authController")

router.route("/register").get(register)
// router.route("/login").get(login)




module.exports = router