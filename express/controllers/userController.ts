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

export { registerUser, getUsers };
