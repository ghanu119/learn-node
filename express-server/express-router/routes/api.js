const express = require('express');
const router = express.Router();

const apiController = require('./../controllers/api');

router.get('/data', apiController.getAllData);

router.get('/:id', apiController.findRecord);


module.exports = router;