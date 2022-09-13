import { UserModel } from '../models/modelUser.js';

/**
 *  
 * @type {import("express").RequestHandler} 
 */
export const controllerUSer = async (req, res, next) => {
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
