import jwt from 'jsonwebtoken';
import { createError } from './errorHandler.js';


/**
 * @type {import('express').RequestHandler}
 */
export const validateToken = (req, res, next) => {
  const accessToken = req.cookies['access_token'];

  if (!accessToken) {
    return next(createError(401, 'You are not authenticated'));
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, 'Token is not valid'));
    }

    req.user = user;
    next();
  });
};
