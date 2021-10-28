import express from 'express';
import { getUsers, registerUser } from '../controllers/userController';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/users').get(getUsers);

export default router;
