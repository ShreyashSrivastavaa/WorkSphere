const Employee = require("../models/Employee");
const { EmployeeValidation, EmployeeValidationUpdate, EmployeePersonalInfoValidation } = require("../validators/schemas");
const Joi = require("joi");

exports.getEmployees = (req, res) => {
  Employee.find().populate("role position department").exec(function (err, employees) {
    res.send(employees);
  });
};

exports.createEmployee = (req, res) => {
  Joi.validate(req.body, EmployeeValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newEmployee = {
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        DateOfJoining: req.body.DateOfJoining,
        ContactNo: req.body.ContactNo,
        EmployeeCode: req.body.EmployeeCode,
        Account: req.body.Account,
        role: req.body.RoleID,
        position: req.body.PositionID,
        department: req.body.DepartmentID
      };
      Employee.create(newEmployee, function (err, employee) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(employee);
        }
      });
    }
  });
};

exports.updateEmployee = (req, res) => {
  Joi.validate(req.body, EmployeeValidationUpdate, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateEmployee = {
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        DateOfJoining: req.body.DateOfJoining,
        ContactNo: req.body.ContactNo,
        EmployeeCode: req.body.EmployeeCode,
        Account: req.body.Account,
        role: req.body.RoleID,
        position: req.body.PositionID,
        department: req.body.DepartmentID
      };
      Employee.findByIdAndUpdate(req.params.id, updateEmployee, function (err, employee) {
        if (err) res.send("error");
        else res.send(updateEmployee);
      });
    }
  });
};

exports.deleteEmployee = (req, res) => {
  Employee.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
    if (!err) res.send(employee);
    else res.send("err");
  });
};

exports.getPersonalInfo = (req, res) => {
  Employee.findById(req.params.id)
    .populate("familyInfo education workExperience")
    .select("BloodGroup DOB ContactNo Email EmergencyContactNo Gender Hobbies PANcardNo PermanetAddress PresentAddress")
    .exec(function (err, info) {
      res.send(info);
    });
};

exports.updatePersonalInfo = (req, res) => {
  Joi.validate(req.body, EmployeePersonalInfoValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updatePersonalInfo = {
        BloodGroup: req.body.BloodGroup,
        DOB: req.body.DOB,
        ContactNo: req.body.ContactNo,
        Email: req.body.Email,
        EmergencyContactNo: req.body.EmergencyContactNo,
        Gender: req.body.Gender,
        Hobbies: req.body.Hobbies,
        PANcardNo: req.body.PANcardNo,
        PermanetAddress: req.body.PermanetAddress,
        PresentAddress: req.body.PresentAddress
      };
      Employee.findByIdAndUpdate(req.params.id, updatePersonalInfo, function (err, employee) {
        if (err) res.send("error");
        else res.send(updatePersonalInfo);
      });
    }
  });
};
