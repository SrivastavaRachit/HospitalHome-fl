const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    address: String,
    mobile_no: Number,
    email_address: String,
    message:String,
      created: Date,
    data: Object,
    user: { type: mongoose.Types.ObjectId, ref: "Users" }
})


const model = mongoose.model('Contact', schema);

module.exports = model;
