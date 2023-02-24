const express = require("express")
const router = express.Router()


const {register, login} = require("../controllers/authController")

router.route("/register").post(register)
router.route("/login").get(login)
router.get('/api/authenticate', function (req, res) {
    if (req.session.userId) {
        res.send({ authenticated: true });
    } else {
        res.send({ authenticated: false });
    }
});



module.exports = router