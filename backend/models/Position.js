const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const positionSchema = new mongoose.Schema({
  PositionName: { type: String, required: true },
  company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});

positionSchema.plugin(autoIncrement.plugin, {
  model: "Position",
  field: "PositionID"
});

module.exports = mongoose.model("Position", positionSchema);
