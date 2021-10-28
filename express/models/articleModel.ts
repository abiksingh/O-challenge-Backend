import mongoose from 'mongoose';

interface User {
  name: string;
  email: string;
}

const schema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModel = mongoose.model<User>('User', schema);

export default UserModel;
