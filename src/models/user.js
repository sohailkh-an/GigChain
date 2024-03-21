// import { Schema, model } from 'mongoose';
// // const User = model('User', userSchema, 'users');
// // export default User;
// const UserSchema = new Schema({
//   name: String,
//   email: { type: String, unique: true },
//   passwordHash: String,
//   userType: {
//     type: String,
//     enum: ['FREELANCER', 'CLIENT'],
//   },
//   profileDescription: String,
//   skills: [String],
//   ratings: Number,
//   services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
//   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
//   reviewsGiven: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
//   reviewsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
//   messagesSent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
//   messagesReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
// });
// const User = model('User', UserSchema, 'users');
// export default User;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  userType: { type: String, enum: ['FREELANCER', 'CLIENT'], required: true },
  profileDescription: { type: String },
  skills: [{ type: String }],
  ratings: { type: Number },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  reviewsGiven: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  reviewsReceived: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  messagesSent: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  messagesReceived: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});


module.exports = mongoose.models.User || mongoose.model('User', userSchema);

