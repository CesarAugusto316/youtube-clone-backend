const { createError } = require('../errorHandler.js');
const { UserModel } = require('../models/modelUser.js');


/**
 *
 * @type {import("express").RequestHandler} 
 */
const getAll = async (req, res, next) => {
  try {
    const users = await UserModel.find();

    res.status(200).json({
      status: 'success',
      users
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  *
//  * @type {import("express").RequestHandler} 
//  */
// const getById = async (req, res, next) => { };

/**
 *
 * @type {import("express").RequestHandler} 
 */
const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await UserModel
        .findByIdAndUpdate(req.user.id, { $set: req.body }, { new: true });

      res.status(200).json({
        status: 'success',
        user: updatedUser
      });
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(403, 'You only can update your account'));
  }
};

/**
 *
 * @type {import("express").RequestHandler} 
 */
const remove = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await UserModel.findByIdAndDelete(req.user.id);

      res.status(200).json({
        status: 'success, user deleted',
        user: null
      });
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(403, 'You only can update your account'));
  }
};

// /**
//  *
//  * @type {import("express").RequestHandler} 
//  */
// const subscribe = async (req, res, next) => { };

// /**
//  *
//  * @type {import("express").RequestHandler} 
//  */
// const unSubscribe = async (req, res, next) => { };

// /**
//  *
//  * @type {import("express").RequestHandler} 
//  */
// const like = async (req, res, next) => { };

// /**
//  *
//  * @type {import("express").RequestHandler} 
//  */
// const disLike = async (req, res, next) => { };

const controllerUSer = {
  getAll,
  // getById,
  update,
  remove,
  // subscribe,
  // unSubscribe,
  // like,
  // disLike
};

module.exports = { controllerUSer };
