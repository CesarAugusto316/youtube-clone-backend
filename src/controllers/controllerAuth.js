const { UserModel } = require('../models/modelUser.js');
const { HttpError } = require('../middlewares/HttpError');
const process = require('process');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
        // @ts-ignore
        delete user._doc.password;

        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200).json({
            status: 'success',
            message: 'user has been logged In',
            user
          });
      } else
        next(new HttpError(401, 'invalid password'));
    }
    else
      next(new HttpError(404, 'user not found'));

  } catch (error) {
    next(error); // calls default errorHandler
  }
};

const controllerAuth = {
  signUp,
  signIn
};

module.exports = { controllerAuth };
