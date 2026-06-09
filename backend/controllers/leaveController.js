const LeaveApplication = require("../models/LeaveApplication");
const Employee = require("../models/Employee");
const { LeaveApplicationValidation, LeaveApplicationHRValidation } = require("../validators/schemas");
const Joi = require("joi");

// Employee Leave Methods
exports.getEmployeeLeaves = (req, res) => {
  Employee.findById(req.params.id)
    .populate("leaveApplication")
    .select("leaveApplication")
    .exec(function (err, employee) {
      res.send(employee);
    });
};

exports.createLeaveRequest = (req, res) => {
  Joi.validate(req.body, LeaveApplicationValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newLeave = {
        Leavetype: req.body.Leavetype,
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate,
        Reasonforleave: req.body.Reasonforleave,
        Status: req.body.Status,
        employee: req.params.id
      };
      LeaveApplication.create(newLeave, function (err, leave) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          Employee.findByIdAndUpdate(req.params.id, { $push: { leaveApplication: leave._id } }, function (err, employee) {
            res.send(leave);
          });
        }
      });
    }
  });
};

exports.updateLeaveRequest = (req, res) => {
  Joi.validate(req.body, LeaveApplicationValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateLeave = {
        Leavetype: req.body.Leavetype,
        FromDate: req.body.FromDate,
        ToDate: req.body.ToDate,
        Reasonforleave: req.body.Reasonforleave,
        Status: req.body.Status
      };
      LeaveApplication.findByIdAndUpdate(req.params.id, updateLeave, function (err, leave) {
        if (err) res.send("error");
        else res.send(updateLeave);
      });
    }
  });
};

// HR Leave Methods
exports.getAllLeaves = (req, res) => {
  LeaveApplication.find()
    .populate("employee")
    .exec(function (err, leaves) {
      res.send(leaves);
    });
};

exports.updateLeaveStatus = (req, res) => {
  Joi.validate(req.body, LeaveApplicationHRValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateLeaveStatus = { Status: req.body.Status };
      LeaveApplication.findByIdAndUpdate(req.params.id, updateLeaveStatus, function (err, leave) {
        if (err) res.send("error");
        else res.send(updateLeaveStatus);
      });
    }
  });
};

exports.deleteLeaveRequest = (req, res) => {
  Employee.findById({ _id: req.params.id }, function (err, employee) {
    if (err) {
      res.send("error");
      console.log(err);
    } else {
      LeaveApplication.findByIdAndRemove({ _id: req.params.id2 }, function (err, leave) {
        if (!err) {
          Employee.update({ _id: req.params.id }, { $pull: { leaveApplication: req.params.id2 } }, function (err, numberAffected) {
            res.send(leave);
          });
        } else {
          res.send("error");
        }
      });
    }
  });
};
