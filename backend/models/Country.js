const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const countrySchema = new mongoose.Schema({
  CountryName: { type: String, required: true },
  states: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }]
});

countrySchema.plugin(autoIncrement.plugin, {
  model: "Country",
  field: "CountryID"
});

module.exports = mongoose.model("Country", countrySchema);
