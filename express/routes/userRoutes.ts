import express from 'express';
import {
  deleteUser,
  getUserById,
  getUsers,
  registerUser,
  updateUser,
} from '../controllers/userController';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/users').get(getUsers);
router.route('/users/:id').get(getUserById);
router.route('/users/:id').delete(deleteUser);
router.route('/users/:id').put(updateUser);

export default router;
