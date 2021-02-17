const Debug = require("debug")
class logger {
    constructor(namespace, options = {}){
        console.log("This is options", namespace)
        if(!namespace) throw new Error("loger requires one namespace")
        this.namespace = namespace || "UM.server "// UM = UserManagement 
    }
    
    log(message, ns){
        if(!ns) ns = this.namespace
        let debug = Debug(ns)
        debug(message)
    }
}



module.exports = logger










