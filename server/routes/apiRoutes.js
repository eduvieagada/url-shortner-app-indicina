import express from 'express';
import apiController from '../controllers/apiController';

const router = express.Router();

router.post('/encode', apiController.encodeUrl);
router.post('/decode', apiController.decodeUrl);
router.get('/statistics', apiController.getStatistics);
router.get('/list', apiController.listUrls);    