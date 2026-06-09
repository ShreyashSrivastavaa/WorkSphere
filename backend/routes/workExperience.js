const express = require("express");
const router = express.Router();
const workExperienceController = require("../controllers/workExperienceController");
const { verifyHREmployee } = require("../middleware/auth");

router.get("/work-experience/:id", verifyHREmployee, workExperienceController.getWorkExperience);
router.post("/work-experience/:id", verifyHREmployee, workExperienceController.createWorkExperience);
router.put("/work-experience/:id", verifyHREmployee, workExperienceController.updateWorkExperience);
router.delete("/work-experience/:id/:id2", verifyHREmployee, workExperienceController.deleteWorkExperience);
// Support frontend case typo
router.delete("/Work-experience/:id/:id2", verifyHREmployee, workExperienceController.deleteWorkExperience);

module.exports = router;
