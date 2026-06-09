const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const { verifyEmployee, verifyHR, verifyAdminHR } = require("../middleware/auth");

// Employee Side
router.get("/leave-application-emp/:id", verifyEmployee, leaveController.getEmployeeLeaves);
router.post("/leave-application-emp/:id", verifyEmployee, leaveController.createLeaveRequest);
router.put("/leave-application-emp/:id", verifyEmployee, leaveController.updateLeaveRequest);

// HR / Admin Side
router.get("/leave-application-hr", verifyHR, leaveController.getAllLeaves);
router.put("/leave-application-hr/:id", verifyHR, leaveController.updateLeaveStatus);
router.delete("/leave-application-hr/:id/:id2", verifyAdminHR, leaveController.deleteLeaveRequest);

module.exports = router;
