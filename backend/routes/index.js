const express = require("express");
const router = express.Router();

router.use("/", require("./auth"));
router.use("/", require("./org"));
router.use("/", require("./project"));
router.use("/", require("./geography"));
router.use("/", require("./company"));
router.use("/", require("./employee"));
router.use("/", require("./salary"));
router.use("/", require("./education"));
router.use("/", require("./familyInfo"));
router.use("/", require("./workExperience"));
router.use("/", require("./leave"));

module.exports = router;
