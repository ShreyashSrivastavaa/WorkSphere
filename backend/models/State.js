const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const stateSchema = new mongoose.Schema({
  StateName: { type: String, required: true },
  country: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  cities: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }]
});

stateSchema.plugin(autoIncrement.plugin, {
  model: "State",
  field: "StateID"
});

module.exports = mongoose.model("State", stateSchema);
