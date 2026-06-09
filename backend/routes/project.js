const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const { verifyAdmin } = require("../middleware/auth");

router.get("/admin/portal", verifyAdmin, projectController.getPortals);
router.post("/admin/portal", verifyAdmin, projectController.createPortal);
router.put("/admin/portal/:id", verifyAdmin, projectController.updatePortal);
router.delete("/admin/portal/:id", verifyAdmin, projectController.deletePortal);

router.get("/admin/project-bid", verifyAdmin, projectController.getProjects);
router.post("/admin/project-bid", verifyAdmin, projectController.createProject);
router.put("/admin/project-bid/:id", verifyAdmin, projectController.updateProject);
router.delete("/admin/project-bid/:id", verifyAdmin, projectController.deleteProject);

module.exports = router;
