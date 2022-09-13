const express = require('express');
const morgan = require('morgan');
const { connectDB } = require('./connectDB.js');
// const { routerUser, routerAuth } = require('./routes/');
const { routerUser } = require('./routes/routerUser.js');
const { routerAuth } = require('./routes/routerAuth.js');
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 5_000;
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/users', routerUser);
app.use('/api/v1/auth', routerAuth);
// app.use('/api/v1/videos', routerAuth);
// app.use('/api/v1/comment', routerAuth);

// default errorHandler
app.use((err, req, res, next) => {
  if (err) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    return res.status(status).json({
      status,
      message
    });
  } else {
    next();
  }
});

// skip when testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[Server ⚡] running on port ${PORT}.`);
  });
}

module.exports = { app };
