import mongoose from 'mongoose';


const UserSchemma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  subscribers: {
    type: Number,
    default: 0
  },
  subscribedUsers: {
    type: [String]
  },
}, { timestamps: true });

/**
 * 
 * Everything in mongoose start with a Schemma, Each schema maps to a
 * MongoDB collection and defines the shape of the documents within
 * that collection.
 */
export const UserModel = mongoose.model('User', UserSchemma);
