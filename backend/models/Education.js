const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const educationSchema = new mongoose.Schema({
  SchoolUniversity: { type: String, required: true },
  Degree: { type: String, required: true },
  Grade: { type: String, required: true },
  PassingOfYear: { type: String, required: true }
});

educationSchema.plugin(autoIncrement.plugin, {
  model: "Education",
  field: "EducationID"
});

module.exports = mongoose.model("Education", educationSchema);
