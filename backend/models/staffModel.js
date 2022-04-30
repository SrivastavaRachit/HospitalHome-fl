const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    avatar: String,
    designation: String,
    rentPrice: Number,
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }]
})


const model = mongoose.model('StaffMembers', schema);

module.exports = model;
