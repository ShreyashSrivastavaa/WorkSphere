const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const { verifyHR, verifyHREmployee } = require("../middleware/auth");

router.get("/employee", verifyHR, employeeController.getEmployees);
router.post("/employee", verifyHR, employeeController.createEmployee);
router.put("/employee/:id", verifyHR, employeeController.updateEmployee);
router.delete("/employee/:id", verifyHR, employeeController.deleteEmployee);

router.get("/personal-info/:id", verifyHREmployee, employeeController.getPersonalInfo);
router.put("/personal-info/:id", verifyHREmployee, employeeController.updatePersonalInfo);

module.exports = router;
