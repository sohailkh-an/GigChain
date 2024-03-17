import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  passwordHash: String, // Store only password hashes!
  bio: String,
  skills: [String],
  portfolio: [{
    title: String,
    description: String,
    imageUrl: String,
    link: String
  }],
  reviews: [{
    author: String,
    content: String,
    rating: Number
  }],

});

const User = model('User', userSchema);

export default User;
