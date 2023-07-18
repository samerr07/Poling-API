const mongoose = require("mongoose")
const { Schema } = mongoose;

const questionSchema = new Schema({
    title:String,
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
});
 
exports.Question = mongoose.model('Question', questionSchema);
