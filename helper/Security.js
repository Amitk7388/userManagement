const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const message = require("./response.js")

class Auth {
    constructor(SecretKey, adminPassword){
        this.SecretKey = SecretKey || process.env.key
        this.adminPassword =  adminPassword  || process.env.adminPassword
    }

    set JWT_ALGORITHM(str){
        this.JWT_ALGORITHM = str
    }
    
    get JWT_ALGORITHM(){
        if(!this.JWT_ALGORITHM) this.JWT_ALGORITHM = "RS256"
        return this.JWT_ALGORITHM
    }
   
    decode(authorization){
        let token = authorization.split(" ")[1]
        return token
    }
    
    compareSync(password, passwordHash){
        return bcrypt.compareSync(password, passwordHash)
    }

    saltString(password){
        let saltround = 10
        let salt = bcrypt.genSaltSync(saltround)
        return bcrypt.hashSync(password, salt)
    }

    async signIn(payload, options = {}){
        let self = this
        let expiresIn = options.expiresIn ? parseInt(options.expiresIn) : 3600
        let jwtOption = {algorithm: self.JWT_ALGORITHM, expiresIn: expiresIn} 
        return jwt.sign(payload, this.SecretKey, jwtOption)
    }

    async jwtVerify(token){
        jwt.verify(token, this.SecretKey, (err, decode) => {
            if(err) message(res, req, 401, "Unauthorized", "failed")
            return decode
        })
    }

}

module.exports = Auth