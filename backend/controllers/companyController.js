const Company = require("../models/Company");
const { CompanyValidation } = require("../validators/schemas");
const Joi = require("joi");

exports.getCompany = (req, res) => {
  Company.find().populate("city").exec(function (err, companies) {
    res.send(companies);
  });
};

exports.createCompany = (req, res) => {
  Joi.validate(req.body, CompanyValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newCompany = {
        CompanyName: req.body.CompanyName,
        Address: req.body.Address,
        PostalCode: req.body.PostalCode,
        Website: req.body.Website,
        Email: req.body.Email,
        ContactPerson: req.body.ContactPerson,
        ContactNo: req.body.ContactNo,
        FaxNo: req.body.FaxNo,
        PanNo: req.body.PanNo,
        GSTNo: req.body.GSTNo,
        CINNo: req.body.CINNo,
        city: req.body.CityID
      };
      Company.create(newCompany, function (err, company) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(company);
        }
      });
    }
  });
};

exports.updateCompany = (req, res) => {
  Joi.validate(req.body, CompanyValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateCompany = {
        CompanyName: req.body.CompanyName,
        Address: req.body.Address,
        PostalCode: req.body.PostalCode,
        Website: req.body.Website,
        Email: req.body.Email,
        ContactPerson: req.body.ContactPerson,
        ContactNo: req.body.ContactNo,
        FaxNo: req.body.FaxNo,
        PanNo: req.body.PanNo,
        GSTNo: req.body.GSTNo,
        CINNo: req.body.CINNo,
        city: req.body.CityID
      };
      Company.findByIdAndUpdate(req.params.id, updateCompany, function (err, company) {
        if (err) res.send("error");
        else res.send(updateCompany);
      });
    }
  });
};
