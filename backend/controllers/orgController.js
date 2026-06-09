const Role = require("../models/Role");
const Position = require("../models/Position");
const Department = require("../models/Department");
const Employee = require("../models/Employee");
const { RoleValidation, PositionValidation, DepartmentValidation } = require("../validators/schemas");
const Joi = require("joi");

// Role Methods
exports.getRoles = (req, res) => {
  Role.find().populate("company").exec(function (err, roles) {
    res.send(roles);
  });
};

exports.createRole = (req, res) => {
  Joi.validate(req.body, RoleValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newRole = { RoleName: req.body.RoleName, company: req.body.CompanyID };
      Role.create(newRole, function (err, role) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(role);
        }
      });
    }
  });
};

exports.updateRole = (req, res) => {
  Joi.validate(req.body, RoleValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateRole = { RoleName: req.body.RoleName, company: req.body.CompanyID };
      Role.findByIdAndUpdate(req.params.id, updateRole, function (err, role) {
        if (err) res.send("error");
        else res.send(updateRole);
      });
    }
  });
};

exports.deleteRole = (req, res) => {
  Employee.find({ role: req.params.id }, function (err, employees) {
    if (err) res.send(err);
    else {
      if (employees.length == 0) {
        Role.findByIdAndRemove({ _id: req.params.id }, function (err, role) {
          if (!err) res.send(role);
          else res.send("err");
        });
      } else {
        res.status(403).send("This role is associated with Employee so you can not delete this");
      }
    }
  });
};

// Position Methods
exports.getPositions = (req, res) => {
  Position.find().populate("company").exec(function (err, positions) {
    res.send(positions);
  });
};

exports.createPosition = (req, res) => {
  Joi.validate(req.body, PositionValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newPosition = { PositionName: req.body.PositionName, company: req.body.CompanyID };
      Position.create(newPosition, function (err, position) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(position);
        }
      });
    }
  });
};

exports.updatePosition = (req, res) => {
  Joi.validate(req.body, PositionValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updatePosition = { PositionName: req.body.PositionName, company: req.body.CompanyID };
      Position.findByIdAndUpdate(req.params.id, updatePosition, function (err, position) {
        if (err) res.send("error");
        else res.send(updatePosition);
      });
    }
  });
};

exports.deletePosition = (req, res) => {
  Employee.find({ position: req.params.id }, function (err, employees) {
    if (err) res.send(err);
    else {
      if (employees.length == 0) {
        Position.findByIdAndRemove({ _id: req.params.id }, function (err, position) {
          if (!err) res.send(position);
          else res.send("err");
        });
      } else {
        res.status(403).send("This position is associated with Employee so you can not delete this");
      }
    }
  });
};

// Department Methods
exports.getDepartments = (req, res) => {
  Department.find().populate("company").exec(function (err, departments) {
    res.send(departments);
  });
};

exports.createDepartment = (req, res) => {
  Joi.validate(req.body, DepartmentValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newDepartment = { DepartmentName: req.body.DepartmentName, company: req.body.CompanyID };
      Department.create(newDepartment, function (err, department) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(department);
        }
      });
    }
  });
};

exports.updateDepartment = (req, res) => {
  Joi.validate(req.body, DepartmentValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateDepartment = { DepartmentName: req.body.DepartmentName, company: req.body.CompanyID };
      Department.findByIdAndUpdate(req.params.id, updateDepartment, function (err, department) {
        if (err) res.send("error");
        else res.send(updateDepartment);
      });
    }
  });
};

exports.deleteDepartment = (req, res) => {
  Employee.find({ department: req.params.id }, function (err, employees) {
    if (err) res.send(err);
    else {
      if (employees.length == 0) {
        Department.findByIdAndRemove({ _id: req.params.id }, function (err, department) {
          if (!err) res.send(department);
          else res.send("err");
        });
      } else {
        res.status(403).send("This department is associated with Employee so you can not delete this");
      }
    }
  });
};
