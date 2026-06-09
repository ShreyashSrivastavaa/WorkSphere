const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const projectSchema = new mongoose.Schema({
  CreatedBy: { type: String },
  CreatedDate: { type: Date, default: Date.now },
  Deleted: { type: Boolean },
  EmpFullName: { type: String },
  EstimatedCost: { type: Number },
  EstimatedTime: { type: Number },
  ModifiedBy: { type: String },
  ModifiedDate: { type: Date },
  ProjectDesc: { type: String },
  ProjectTitle: { type: String, required: true },
  ProjectURL: { type: String },
  Remark: { type: String },
  ResourceID: { type: Number },
  Status: { type: Number, required: true },
  portals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Portal" }]
});

projectSchema.plugin(autoIncrement.plugin, {
  model: "Project",
  field: "ID"
});

module.exports = mongoose.model("Project", projectSchema);
