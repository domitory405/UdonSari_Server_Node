var express = require('express');
var router = express.Router();

var testController = require('../controller/testController.js')

router.get('/test', testController.getTest);

module.exports = router;