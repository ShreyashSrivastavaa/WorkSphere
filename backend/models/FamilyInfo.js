const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const familyInfoSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Relationship: { type: String, required: true },
  DOB: { type: Date, required: true },
  Occupation: { type: String, required: true }
});

familyInfoSchema.plugin(autoIncrement.plugin, {
  model: "FamilyInfo",
  field: "FamilyInfoID"
});

module.exports = mongoose.model("FamilyInfo", familyInfoSchema);
