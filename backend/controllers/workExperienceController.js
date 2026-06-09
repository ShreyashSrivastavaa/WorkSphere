const WorkExperience = require("../models/WorkExperience");
const Employee = require("../models/Employee");
const { WorkExperienceValidation } = require("../validators/schemas");
const Joi = require("joi");

exports.getWorkExperience = (req, res) => {
  Employee.findById(req.params.id)
    .populate("workExperience")
    .select("workExperience")
    .exec(function (err, employee) {
      res.send(employee);
    });
};

exports.createWorkExperience = (req, res) => {
  Joi.validate(req.body, WorkExperienceValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newWorkExperience = {
        CompanyName: req.body.CompanyName,
        Designation: req.body.Designation,
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate
      };
      WorkExperience.create(newWorkExperience, function (err, workExperience) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          Employee.findByIdAndUpdate(req.params.id, { $push: { workExperience: workExperience._id } }, function (err, employee) {
            res.send(workExperience);
          });
        }
      });
    }
  });
};

exports.updateWorkExperience = (req, res) => {
  Joi.validate(req.body, WorkExperienceValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateWorkExperience = {
        CompanyName: req.body.CompanyName,
        Designation: req.body.Designation,
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate
      };
      WorkExperience.findByIdAndUpdate(req.params.id, updateWorkExperience, function (err, workExperience) {
        if (err) res.send("error");
        else res.send(updateWorkExperience);
      });
    }
  });
};

exports.deleteWorkExperience = (req, res) => {
  Employee.findById({ _id: req.params.id }, function (err, employee) {
    if (err) {
      res.send("error");
    } else {
      WorkExperience.findByIdAndRemove({ _id: req.params.id2 }, function (err, workExperience) {
        if (!err) {
          Employee.update({ _id: req.params.id }, { $pull: { workExperience: req.params.id2 } }, function (err, numberAffected) {
            res.send(workExperience);
          });
        } else {
          res.send("error");
        }
      });
    }
  });
};
