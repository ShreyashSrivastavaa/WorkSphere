const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const mongoURI = process.env.DATABASEURL || "mongodb://localhost:27017/emp";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose
  .connect(mongoURI)
  .then(() => console.log("db connection successful"))
  .catch(err => console.log(err));

// Create connection for auto-increment plugin
const conn = mongoose.createConnection(mongoURI);
autoIncrement.initialize(conn);

module.exports = {
  mongoose,
  autoIncrement,
  conn
};
