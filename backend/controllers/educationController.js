const Education = require("../models/Education");
const Employee = require("../models/Employee");
const { EducationValidation } = require("../validators/schemas");
const Joi = require("joi");

exports.getEducation = (req, res) => {
  Employee.findById(req.params.id)
    .populate("education")
    .select("education")
    .exec(function (err, employee) {
      res.send(employee);
    });
};

exports.createEducation = (req, res) => {
  Joi.validate(req.body, EducationValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newEducation = {
        SchoolUniversity: req.body.SchoolUniversity,
        Degree: req.body.Degree,
        Grade: req.body.Grade,
        PassingOfYear: req.body.PassingOfYear
      };
      Education.create(newEducation, function (err, education) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          Employee.findByIdAndUpdate(req.params.id, { $push: { education: education._id } }, function (err, employee) {
            res.send(education);
          });
        }
      });
    }
  });
};

exports.updateEducation = (req, res) => {
  Joi.validate(req.body, EducationValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateEducation = {
        SchoolUniversity: req.body.SchoolUniversity,
        Degree: req.body.Degree,
        Grade: req.body.Grade,
        PassingOfYear: req.body.PassingOfYear
      };
      Education.findByIdAndUpdate(req.params.id, updateEducation, function (err, education) {
        if (err) res.send("error");
        else res.send(updateEducation);
      });
    }
  });
};

exports.deleteEducation = (req, res) => {
  Employee.findById({ _id: req.params.id }, function (err, employee) {
    if (err) {
      res.send("error");
    } else {
      Education.findByIdAndRemove({ _id: req.params.id2 }, function (err, education) {
        if (!err) {
          Employee.update({ _id: req.params.id }, { $pull: { education: req.params.id2 } }, function (err, numberAffected) {
            res.send(education);
          });
        } else {
          res.send("error");
        }
      });
    }
  });
};
