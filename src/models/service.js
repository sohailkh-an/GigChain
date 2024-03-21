import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  deliveryTime: { type: Number, required: true },
  categories: [{ type: String }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  freelancerId: { type: Schema.Types.ObjectId, ref: 'User', required:true },
  orders:[{type : Schema.Types.ObjectId , ref : 'Order'}]
});

export default model('Service', serviceSchema, 'services');
