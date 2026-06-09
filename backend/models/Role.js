const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const roleSchema = new mongoose.Schema({
  RoleName: { type: String, required: true },
  company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});

roleSchema.plugin(autoIncrement.plugin, {
  model: "Role",
  field: "RoleID"
});

module.exports = mongoose.model("Role", roleSchema);
