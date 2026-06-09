const express = require("express");
const router = express.Router();
const orgController = require("../controllers/orgController");
const { verifyAdminHR } = require("../middleware/auth");

router.get("/role", verifyAdminHR, orgController.getRoles);
router.post("/role", verifyAdminHR, orgController.createRole);
router.put("/role/:id", verifyAdminHR, orgController.updateRole);
router.delete("/role/:id", verifyAdminHR, orgController.deleteRole);

router.get("/position", verifyAdminHR, orgController.getPositions);
router.post("/position", verifyAdminHR, orgController.createPosition);
router.put("/position/:id", verifyAdminHR, orgController.updatePosition);
router.delete("/position/:id", verifyAdminHR, orgController.deletePosition);

router.get("/department", verifyAdminHR, orgController.getDepartments);
router.post("/department", verifyAdminHR, orgController.createDepartment);
router.put("/department/:id", verifyAdminHR, orgController.updateDepartment);
router.delete("/department/:id", verifyAdminHR, orgController.deleteDepartment);

module.exports = router;
