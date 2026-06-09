const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salaryController");
const { verifyHR } = require("../middleware/auth");

router.get("/salary", verifyHR, salaryController.getSalaries);
router.post("/salary/:id", verifyHR, salaryController.createSalary);
router.put("/salary/:id", verifyHR, salaryController.updateSalary);
router.delete("/salary/:id/:id2", verifyHR, salaryController.deleteSalary);

module.exports = router;
