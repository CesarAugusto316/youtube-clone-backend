const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

exports.connectDB = async () => {
  mongoose.connect('mongodb://dev:dev@localhost:27017', {
    dbName: 'youtube_dev',
  })
    .then(({ connection }) => {
      console.log(`[DB ⚡] connected to ${connection.db.databaseName} DB`);
    })
    .catch(error => {
      console.log(error.message);
    });
};
