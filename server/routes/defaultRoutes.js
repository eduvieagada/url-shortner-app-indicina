import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

router.get('/:uid', homeController.redirect);

export default router;
