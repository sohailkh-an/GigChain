import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  // bio: { type: String, required: false },
  userType: { type: String, required: true },
  // skills: [String],
  // portfolio: [{s
  //   title: String,
  //   description: String,
  //   imageUrl: String,
  //   link: String
  // }],
  // reviews: [{
  //   author: String,
  //   content: String,
  //   rating: Number
  // }],
}
  , { timestamps: true }
);

const User = models.User || mongoose.model ("User", userSchema);

export default User;
