import express from 'express';
import {
  addStudent,
  deleteStudent,
  getStudentById,
  getStudents,
  updateStudent,
} from '../controllers/studentController';

const router = express.Router();

router.route('/register').post(addStudent);
router.route('/students').get(getStudents);
router
  .route('/student/:id')
  .get(getStudentById)
  .delete(deleteStudent)
  .put(updateStudent);

export default router;
