import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    _id : Schema.Types.ObjectId,
    content : {type : String , required:true},
    timestamp : {type : Date , required:true},
    fromUserId : {type : Schema.Types.ObjectId ,ref : 'User',required:true},
    toUserId : {type : Schema.Types.ObjectId ,ref : 'User',required:true}
});

export default model('Message', messageSchema, 'messages');
