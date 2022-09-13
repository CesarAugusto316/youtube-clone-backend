const mongoose = require('mongoose');


const VideoSchemma = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0
  },
  tags: {
    type: [String],
    default: []
  },
  likes: {
    type: [String],
    default: []
  },
  dislikes: {
    type: [String],
    default: []
  },
}, { timestamps: true });

/**
 * 
 * Everything in mongoose start with a Schemma, Each schema maps to a
 * MongoDB collection and defines the shape of the documents within
 * that collection.
 */
const VideoModel = mongoose.model('Video', VideoSchemma);
module.exports = { VideoModel };
