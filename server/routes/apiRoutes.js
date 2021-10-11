const express = require('express');
const ApiController = require('../controllers/apiController');

const router = express.Router();

router.post('/encode', ApiController.encodeUrl);
router.post('/decode', ApiController.decodeUrl);
router.get('/statistics/:path', ApiController.getStatistics);
router.get('/list', ApiController.listUrls);    

module.exports = router;