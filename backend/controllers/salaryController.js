const Salary = require("../models/Salary");
const Employee = require("../models/Employee");
const { SalaryValidation } = require("../validators/schemas");
const Joi = require("joi");

exports.getSalaries = (req, res) => {
  Employee.find()
    .populate("salary")
    .select("FirstName LastName MiddleName Email salary")
    .exec(function (err, salaries) {
      res.send(salaries);
    });
};

exports.createSalary = (req, res) => {
  Joi.validate(req.body, SalaryValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newSalary = {
        BasicSalary: req.body.BasicSalary,
        BankName: req.body.BankName,
        AccountNo: req.body.AccountNo,
        AccountHolderName: req.body.AccountHolderName,
        IFSCcode: req.body.IFSCcode,
        TaxDeduction: req.body.TaxDeduction
      };
      Salary.create(newSalary, function (err, salary) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          Employee.findByIdAndUpdate(req.params.id, { $push: { salary: salary._id } }, function (err, employee) {
            res.send(salary);
          });
        }
      });
    }
  });
};

exports.updateSalary = (req, res) => {
  Joi.validate(req.body, SalaryValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateSalary = {
        BasicSalary: req.body.BasicSalary,
        BankName: req.body.BankName,
        AccountNo: req.body.AccountNo,
        AccountHolderName: req.body.AccountHolderName,
        IFSCcode: req.body.IFSCcode,
        TaxDeduction: req.body.TaxDeduction
      };
      Salary.findByIdAndUpdate(req.params.id, updateSalary, function (err, salary) {
        if (err) res.send("error");
        else res.send(updateSalary);
      });
    }
  });
};

exports.deleteSalary = (req, res) => {
  Employee.findById({ _id: req.params.id }, function (err, employee) {
    if (err) {
      res.send("error");
    } else {
      Salary.findByIdAndRemove({ _id: req.params.id2 }, function (err, salary) {
        if (!err) {
          Employee.update({ _id: req.params.id }, { $pull: { salary: req.params.id2 } }, function (err, numberAffected) {
            res.send(salary);
          });
        } else {
          res.send("error");
        }
      });
    }
  });
};
