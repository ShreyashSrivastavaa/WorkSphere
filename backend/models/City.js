const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const citySchema = new mongoose.Schema({
  CityName: { type: String, required: true },
  state: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }]
});

citySchema.plugin(autoIncrement.plugin, {
  model: "City",
  field: "CityID"
});

module.exports = mongoose.model("City", citySchema);
