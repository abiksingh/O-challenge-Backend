import StudentModel from '../models/studentModel';
import asyncHandler from 'express-async-handler';

const addStudent = asyncHandler(async (req, res) => {
  const { firstName, lastName, dateOfBirth, course, hours, price } = req.body;

  const student = await StudentModel.create({
    firstName,
    lastName,
    dateOfBirth,
    course,
    hours,
    price,
  });

  if (student) {
    res.status(201).json({
      _id: student._id,
      firstName: student.firstName,
      lastName: student.lastName,
      dateOfBirth: student.dateOfBirth,
      course: student.course,
      hours: student.hours,
      price: student.price,
    });
  } else {
    res.status(400);
    console.log('Error');
  }
});

const getStudents = asyncHandler(async (req, res) => {
  const students = await StudentModel.find({});

  res.json(students);
});

const getStudentById = asyncHandler(async (req, res) => {
  const student = await StudentModel.findById(req.params.id);

  if (student) {
    res.json(student);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await StudentModel.findById(req.params.id);

  if (student) {
    await student.remove();
    res.json({ message: 'Student removed' });
  } else {
    res.status(404);
    throw new Error('Student not found');
  }
});

const updateStudent = asyncHandler(async (req, res) => {
  const student = await StudentModel.findById(req.params.id);

  if (student) {
    student.firstName = req.body.firstName || student.firstName;
    student.lastName = req.body.lastName || student.lastName;
    student.dateOfBirth = req.body.dateOfBirth || student.dateOfBirth;
    student.course = req.body.course || student.course;
    student.hours = req.body.hours || student.hours;
    student.price = req.body.price || student.price;

    const updatedStudent = await student.save();

    res.json({
      _id: updatedStudent._id,
      firstName: updatedStudent.firstName,
      lastName: updatedStudent.lastName,
      dateOfBirth: updatedStudent.dateOfBirth,
      course: updatedStudent.course,
      hours: updatedStudent.hours,
      price: updatedStudent.price,
    });
  } else {
    res.status(404);
    throw new Error('student not found');
  }
});

export {
  addStudent,
  getStudents,
  getStudentById,
  deleteStudent,
  updateStudent,
};
