const express = require("express")
const bodyParser = require("body-parser")
const router = require("express").Router()
const morgan = require("morgan")
const mongoose = require("mongoose")
const loggerM = require("../logger/index")
const logger = new loggerM("UM.Server")
const Mongodbconnection = require("./util/index")
const routes = require("../routes/index")
require("dotenv").config()

const app = express()

Mongodbconnection()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(morgan("dev"))

app.use("/api", routes)
app.get("/", (req, res) => {
    logger.log("welcome to UserManagement Created by Amit")
    res.json({message :"welcome to UserManagement Created by Amit" })
})

const PORT = process.env.PORT || 8484
app.listen(PORT, () => logger.log(`App is listing on PORT http://localhost:${PORT}`))