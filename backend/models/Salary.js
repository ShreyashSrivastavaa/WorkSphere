const mongoose = require("mongoose");
const { autoIncrement } = require("../config/db");

const salarySchema = new mongoose.Schema({
  BasicSalary: { type: String, required: true },
  BankName: { type: String, required: true },
  AccountNo: { type: String, required: true },
  AccountHolderName: { type: String, required: true },
  IFSCcode: { type: String, required: true },
  TaxDeduction: { type: String, required: true }
});

salarySchema.plugin(autoIncrement.plugin, {
  model: "Salary",
  field: "SalaryID"
});

module.exports = mongoose.model("Salary", salarySchema);
