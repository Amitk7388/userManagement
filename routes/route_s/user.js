const router = require("express").Router()
const userScehma =  require("../../models/user")
const alogger = require("../../logger/index")
const logger = new alogger("UM.userRoute")
const message = require("../../helper/response")


router.post("/register", async (req, res) => {
    let data = await userScehma.create(req.body).catch(async(error) => {
        message(res, req, 401, error.message, "Failed")    
    })
   message(res, req, 201, "UserCreated", "sucessFully Created")
})


router.post("/login", async(res, req) => {

})

module.exports = router