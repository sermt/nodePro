const express = require('express');
const userRouter = express.Router();
const {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');


userRouter.route('/').get(getAllUsers).post(addUser);
userRouter.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

module.exports = userRouter;
