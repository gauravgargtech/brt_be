const express = require("express");
const router = express.Router();
const referralController = require("../controllers/referral");


router.get("/", referralController.listing);

router.post("/create", referralController.create);

module.exports = router;
