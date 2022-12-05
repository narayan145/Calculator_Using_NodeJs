const express = require('express');
const router = express.Router();
const percentageController = require('../controllers/percentageController');


router.post("/", percentageController.getPercentage);
module.exports = router;