const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");
const { verifyHREmployee } = require("../middleware/auth");

router.get("/education/:id", verifyHREmployee, educationController.getEducation);
router.post("/education/:id", verifyHREmployee, educationController.createEducation);
router.put("/education/:id", verifyHREmployee, educationController.updateEducation);
router.delete("/education/:id/:id2", verifyHREmployee, educationController.deleteEducation);

module.exports = router;
