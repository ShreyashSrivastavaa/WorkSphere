const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const workExperienceSchema = new mongoose.Schema({
  CompanyName: { type: String, required: true },
  Designation: { type: String, required: true },
  FromDate: { type: Date, required: true },
  ToDate: { type: Date, required: true }
});

workExperienceSchema.plugin(autoIncrement.plugin, {
  model: "WorkExperience",
  field: "WorkExperienceID"
});

module.exports = mongoose.model("WorkExperience", workExperienceSchema);
