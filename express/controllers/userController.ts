import UserModel from '../models/articleModel';
import asyncHandler from 'express-async-handler';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  //   const userExist = await UserModel.findOne({ email });

  //  if(userExist){
  //      res.status(400);
  //      throw new Error('User already exists')
  //  }

  const user = await UserModel.create({
    name,
    email,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    console.log('Error');
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find({});

  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { registerUser, getUsers, getUserById, deleteUser, updateUser };
