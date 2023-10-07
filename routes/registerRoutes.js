const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const controller = require('../controllers/homeController');

router.get('/', registerController.getRegister);

router.post('/', registerController.postUser);

module.exports = router;