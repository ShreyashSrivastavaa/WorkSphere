const express = require("express");
const router = express.Router();
const geographyController = require("../controllers/geographyController");
const { verifyAdminHR } = require("../middleware/auth");

router.get("/country", verifyAdminHR, geographyController.getCountries);
router.post("/country", verifyAdminHR, geographyController.createCountry);
router.put("/country/:id", verifyAdminHR, geographyController.updateCountry);
router.delete("/country/:id", verifyAdminHR, geographyController.deleteCountry);

router.get("/state", verifyAdminHR, geographyController.getStates);
router.post("/state", verifyAdminHR, geographyController.createState);
router.put("/state/:id", verifyAdminHR, geographyController.updateState);
router.delete("/state/:id", verifyAdminHR, geographyController.deleteState);

router.get("/city", verifyAdminHR, geographyController.getCities);
router.post("/city", verifyAdminHR, geographyController.createCity);
router.put("/city/:id", verifyAdminHR, geographyController.updateCity);
router.delete("/city/:id", verifyAdminHR, geographyController.deleteCity);

module.exports = router;
