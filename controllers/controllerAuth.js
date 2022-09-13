import { UserModel } from '../models/modelUser.js';
import { createError } from '../errorHandler.js';
import process from 'process';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


/**
 *
 * @type {import("express").RequestHandler} 
 */
const signUp = async (req, res, next) => {
  try {
    // password encryption
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await UserModel.create({ ...req.body, password: hash });

    res.status(201).json({
      status: 'success',
      message: 'user has been created',
      user
    });
  } catch (error) {
    next(error); // calls default errorHandler
  }
};

/**
 *
 * @type {import("express").RequestHandler} 
 */
const signIn = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ name: req.body.name });

    if (user) {
      const hasValidPassword = await bcrypt
        .compare(req.body.password, user?.password || '');

      if (hasValidPassword) {
        const payload = { id: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        delete user._doc.password;

        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200).json({
            status: 'success',
            message: 'user has been logged In',
            user
          });
      } else
        next(createError(401, 'invalid password'));
    }
    else
      next(createError(404, 'user not found'));

  } catch (error) {
    next(error); // calls default errorHandler
  }
};

export const controllerAuth = {
  signUp,
  signIn
};
