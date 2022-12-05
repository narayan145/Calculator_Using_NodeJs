const express = require('express');
const router = express.Router();
const percentageController = require('../controllers/percentageController');


router.post("/", percentageController.getPercentage);
router.post("number", percentageController.getNumber);
module.exports = router;