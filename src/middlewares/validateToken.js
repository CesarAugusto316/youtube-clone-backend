const jwt = require('jsonwebtoken');
const { HttpError } = require('./HttpError');


/**
 * 
 * @type {import('express').RequestHandler}
 */
exports.validateToken = (req, res, next) => {
  const accessToken = req.cookies['access_token'];

  if (!accessToken) {
    return next(new HttpError(401, 'You are not authenticated'));
  }

  jwt.verify(accessToken, process.env.JWT_SECRET,
    /**
     * 
     * @param {jwt.JsonWebTokenError} err
     * @param {Object} user
     * @returns 
     */
    (err, user) => {
      if (err) {
        return next(new HttpError(403, 'Token is not valid'));
      }

      req['user'] = user;
      next();
    });
};
