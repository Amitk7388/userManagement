const loggerM = require("../logger/index");
const logger = new loggerM("UM.messages")


const response = function (res, req, statusCode, message, state) {
  if (!statusCode) throw new Error("status code require");
  if (!state) throw new Error("state required");
  try {
    res.status(statusCode).json({ message: message, state: state });
  }catch(error){logger.log("failed to send message to user")}
  
};

module.exports = response;