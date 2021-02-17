const Authic = require("../helper/Security")
const Auth = new Authic()
const loggerM = require("../logger/index");
const logger = new loggerM("UM.Middleware")
const message = require("./response.js")

module.exports = (req, res, next) => {
    
    if(req.headers.authorization){
        let token = Auth.decode(req.headers.authorization)
        (async(token) => {
            try{
                let decodeToken = await Auth.jwtVerify(token)
                req.user = decodeToken
                next()
            }catch(error){
                loger.log(error)
                message(req, res, 401, error.message, "Failed" )
            }
        })()
    }         
}

