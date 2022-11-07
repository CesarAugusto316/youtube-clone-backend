/**
 * 
 * @type {import("express").ErrorRequestHandler}
 */
exports.defaultErrorHandler = (err, req, res, next) => {
  if (err) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    res.status(status).json({
      status,
      message
    });
  } else {
    next();
  }
};
