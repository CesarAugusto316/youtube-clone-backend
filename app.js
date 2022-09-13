import express from 'express';
import morgan from 'morgan';
import { connectDB } from './connectDB.js';
import { routerUser, routerAuth } from './routes/index.js';
import cookieParser from 'cookie-parser';


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

app.listen(PORT, () => {
  console.log(`[Server ⚡] running on port ${PORT}.`);
});
