const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const { verifyAdminHR } = require("../middleware/auth");

router.get("/company", verifyAdminHR, companyController.getCompany);
router.post("/company", verifyAdminHR, companyController.createCompany);
router.put("/company/:id", verifyAdminHR, companyController.updateCompany);

module.exports = router;
