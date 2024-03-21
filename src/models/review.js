import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    _id : Schema.Types.ObjectId,
    rating : {type : Number , required:true},
    comment : {type : String},
    reviewDate : {type : Date , required:true},
    orderId : {type : Schema.Types.ObjectId ,ref : 'Order',required:true},
    reviewerId : {type : Schema.Types.ObjectId ,ref : 'User',required:true},
    revieweeId : {type : Schema.Types.ObjectId ,ref : 'User',required:true},
    serviceId : {type : Schema.Types.ObjectId ,ref : 'Service'}
});

export default model('Review', reviewSchema, 'reviews');
