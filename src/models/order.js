import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  _id : Schema.Types.ObjectId,
  status : {type : String , enum : ['PENDING','ACTIVE','COMPLETED'], required:true},
  orderDate : {type : Date , required:true},
  deliveryDate : {type : Date},
  serviceId : {type : Schema.Types.ObjectId ,ref : 'Service',required:true},
  clientId : {type : Schema.Types.ObjectId ,ref : 'User',required:true},
  reviews:[{type : Schema.Types.ObjectId , ref : 'Review'}]
});

export default model('Order', orderSchema, 'orders');
