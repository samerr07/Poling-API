const mongoose = require("mongoose")
const { Schema } = mongoose;

const optionSchema = new Schema({
    option : String,
    question: String,
    vote : {
        type: Number,
        default:0
    },
    add_vote : String
});
 
exports.Option = mongoose.model('Option', optionSchema);