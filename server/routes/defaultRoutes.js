const express = require('express');
const HomeController = require('../controllers/homeController');

const router = express.Router();

router.get('/:uid', HomeController.redirect);

module.exports = router;
