import { config } from 'dotenv';
import mongoose from 'mongoose';


config({
  path: './.env'
});

export const connectDB = async () => {
  mongoose.connect(process.env.DB_URI, {
    dbName: 'youtube',
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  })
    .then(({ connection }) => {
      console.log(`[DB ⚡] connected to ${connection.db.databaseName} DB`);
    })
    .catch(error => {
      console.log(error.message);
    });
};
