const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { routerUser } = require('./routes/routerUser.js');
const { routerAuth } = require('./routes/routerAuth.js');
const { routerVideo } = require('./routes/routerVideo.js');
const { defaultErrorHandler } = require('./middlewares/defaultErrorHanlder.js');


const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/users', routerUser);
app.use('/api/v1/auth', routerAuth);
app.use('/api/v1/videos', routerVideo);

// default errorHandler
app.use(defaultErrorHandler);

module.exports = { app };
