const FamilyInfo = require("../models/FamilyInfo");
const Employee = require("../models/Employee");
const { FamilyInfoValidation } = require("../validators/schemas");
const Joi = require("joi");

exports.getFamilyInfo = (req, res) => {
  Employee.findById(req.params.id)
    .populate("familyInfo")
    .select("familyInfo")
    .exec(function (err, employee) {
      res.send(employee);
    });
};

exports.createFamilyInfo = (req, res) => {
  Joi.validate(req.body, FamilyInfoValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newFamilyInfo = {
        Name: req.body.Name,
        Relationship: req.body.Relationship,
        DOB: req.body.DOB,
        Occupation: req.body.Occupation
      };
      FamilyInfo.create(newFamilyInfo, function (err, familyInfo) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          Employee.findByIdAndUpdate(req.params.id, { $push: { familyInfo: familyInfo._id } }, function (err, employee) {
            res.send(familyInfo);
          });
        }
      });
    }
  });
};

exports.updateFamilyInfo = (req, res) => {
  Joi.validate(req.body, FamilyInfoValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateFamilyInfo = {
        Name: req.body.Name,
        Relationship: req.body.Relationship,
        DOB: req.body.DOB,
        Occupation: req.body.Occupation
      };
      FamilyInfo.findByIdAndUpdate(req.params.id, updateFamilyInfo, function (err, familyInfo) {
        if (err) res.send("error");
        else res.send(updateFamilyInfo);
      });
    }
  });
};

exports.deleteFamilyInfo = (req, res) => {
  Employee.findById({ _id: req.params.id }, function (err, employee) {
    if (err) {
      res.send("error");
    } else {
      FamilyInfo.findByIdAndRemove({ _id: req.params.id2 }, function (err, familyInfo) {
        if (!err) {
          Employee.update({ _id: req.params.id }, { $pull: { familyInfo: req.params.id2 } }, function (err, numberAffected) {
            res.send(familyInfo);
          });
        } else {
          res.send("error");
        }
      });
    }
  });
};
