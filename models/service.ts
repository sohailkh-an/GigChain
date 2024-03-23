import mongoose, { Schema, models } from "mongoose";

const serviceSchema = new Schema(
  {
    category: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    serviceProvider: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Service = models.Service || mongoose.model("Service", serviceSchema);
export default Service;