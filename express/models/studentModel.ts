import mongoose from 'mongoose';

interface Student {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  course: string;
  hours: number;
  price: number;
}

const schema = new mongoose.Schema<Student>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  course: { type: String, required: true },
  hours: { type: Number, required: true },
  price: { type: Number, required: true },
});

const StudentModel = mongoose.model<Student>('Student', schema);

export default StudentModel;
