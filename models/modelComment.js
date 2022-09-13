const mongoose = require('mongoose');


const CommentSchemma = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

/**
 * 
 * Everything in mongoose start with a Schemma, Each schema maps to a
 * MongoDB collection and defines the shape of the documents within
 * that collection.
 */
const CommentModel = mongoose.model('Video', CommentSchemma);
module.exports = { CommentModel };

