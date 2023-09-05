const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://robertotonde:robertotonde123@cluster0.ldktc.mongodb.net/mern-rooms";

mongoose.connect(mongoURL, {});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo db connection failed");
});

connection.on("connected", () => {
  console.log("Mongo Db connection succesful");
});

module.exports = mongoose;
