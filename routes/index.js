const router = require("express").Router()
const userRoute = require("./route_s/user")

router.use(userRoute)


module.exports = router