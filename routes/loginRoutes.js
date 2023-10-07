const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.getLogin);

router.post('/', loginController.signIn);

router.get('/sign-out', loginController.signOut);

module.exports = router;