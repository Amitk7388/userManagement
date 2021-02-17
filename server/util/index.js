const mongoose = require("mongoose");
const loggerM = require("../../logger/index");
const logger = new loggerM("UM.DatabaseConnection");

const connection = (mongourl) => {
  mongourl = mongourl || process.env.devMongo;
  mongoose.connect(mongourl, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.once("open", () => logger.log(`connection done sucessFully on ${mongourl} `));

  db.on("error", () => logger.log(error));
};

module.exports = connection;
