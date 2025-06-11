import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();


//Route For Register user
router.post('/register', register);

//Route For Login user
router.post('/login', login);

export default router;
