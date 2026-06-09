const express = require("express");
const router = express.Router();
const familyInfoController = require("../controllers/familyInfoController");
const { verifyHREmployee } = require("../middleware/auth");

router.get("/family-info/:id", verifyHREmployee, familyInfoController.getFamilyInfo);
router.post("/family-info/:id", verifyHREmployee, familyInfoController.createFamilyInfo);
router.put("/family-info/:id", verifyHREmployee, familyInfoController.updateFamilyInfo);
router.delete("/family-info/:id/:id2", verifyHREmployee, familyInfoController.deleteFamilyInfo);

module.exports = router;
