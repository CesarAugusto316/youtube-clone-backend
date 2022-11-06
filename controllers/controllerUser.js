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
      users,
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
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.user.id,
        { $set: req.body },
        { new: true }
      );

      res.status(200).json({
        status: 'success',
        user: updatedUser,
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
        user: null,
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

// const getUser = async (req, res, next) => {
//   try {
//     const user = await UserModel.findOne({ name: req.params.name });
//     res.status(200).json(user);
//   } catch (error) {
//     next(createError(403, 'user not found'));
//   }
// };

// /**
//  *
//  * @type {import("express").RequestHandler}
//  */
// const subscribe = async (req, res, next) => {
//   try {
//     await UserModel.findById(req.user.id, {
//       $push: { subscribeUser: req.params.id },
//     });
//     await UserModel.findByIdAndUpdate(req.params.id, {
//       $inc: { subscribers: 1 },
//     });
//     res.status(200).json('Subscribe successful.');
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  *
//  * @type {import("express").RequestHandler}
//  */

// const unSubscribe = async (req, res, next) => {
//   try {
//     await UserModel.findById(req.user.id, {
//       $pull: { subscribedUser: req.params.id },
//     });
//     await UserModel.findByIdAndUpdate(req.params.id, {
//       $inc: { subscribers: -1 },
//     });
//     res.status(200).json('Unsubscription successful.');
//   } catch (error) {
//     next(error);
//   }
// };

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
  // getUser,
  update,
  remove,
  // subscribe,
  // unSubscribe,
  // like,
  // disLike
};

module.exports = { controllerUSer };
