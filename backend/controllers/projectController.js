const Portal = require("../models/Portal");
const Project = require("../models/Project");
const { PortalValidation, ProjectValidation } = require("../validators/schemas");
const Joi = require("joi");

// Portal Methods
exports.getPortals = (req, res) => {
  Portal.find(function (err, portals) {
    res.send(portals);
  });
};

exports.createPortal = (req, res) => {
  Joi.validate(req.body, PortalValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newPortal = { PortalName: req.body.PortalName, Status: req.body.Status };
      Portal.create(newPortal, function (err, portal) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(portal);
        }
      });
    }
  });
};

exports.updatePortal = (req, res) => {
  Joi.validate(req.body, PortalValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updatePortal = { PortalName: req.body.PortalName, Status: req.body.Status };
      Portal.findByIdAndUpdate(req.params.id, updatePortal, function (err, portal) {
        if (err) res.send("error");
        else res.send(updatePortal);
      });
    }
  });
};

exports.deletePortal = (req, res) => {
  Portal.findByIdAndRemove({ _id: req.params.id }, function (err, portal) {
    if (!err) res.send(portal);
    else res.send("err");
  });
};

// Project Methods
exports.getProjects = (req, res) => {
  Project.find().populate("portals").exec(function (err, projects) {
    res.send(projects);
  });
};

exports.createProject = (req, res) => {
  Joi.validate(req.body, ProjectValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const newProject = {
        ProjectTitle: req.body.ProjectTitle,
        ProjectURL: req.body.ProjectURL,
        ProjectDesc: req.body.ProjectDesc,
        portals: req.body.Portal_ID,
        EstimatedTime: req.body.EstimatedTime,
        EstimatedCost: req.body.EstimatedCost,
        ResourceID: req.body.ResourceID,
        Status: req.body.Status,
        Remark: req.body.Remark
      };
      Project.create(newProject, function (err, project) {
        if (err) {
          console.log(err);
          res.send("error");
        } else {
          res.send(project);
        }
      });
    }
  });
};

exports.updateProject = (req, res) => {
  Joi.validate(req.body, ProjectValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      const updateProject = {
        ProjectTitle: req.body.ProjectTitle,
        ProjectURL: req.body.ProjectURL,
        ProjectDesc: req.body.ProjectDesc,
        portals: req.body.Portal_ID,
        EstimatedTime: req.body.EstimatedTime,
        EstimatedCost: req.body.EstimatedCost,
        ResourceID: req.body.ResourceID,
        Status: req.body.Status,
        Remark: req.body.Remark
      };
      Project.findByIdAndUpdate(req.params.id, updateProject, function (err, project) {
        if (err) res.send("error");
        else res.send(updateProject);
      });
    }
  });
};

exports.deleteProject = (req, res) => {
  Project.findByIdAndRemove({ _id: req.params.id }, function (err, project) {
    if (!err) res.send(project);
    else res.send("err");
  });
};
