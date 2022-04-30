const mongoose = require('../connection');

const schema = new mongoose.Schema({
    rating: Number,
    text: String,
    user: { type: mongoose.Types.ObjectId, ref: 'Users' }
})


const model = mongoose.model('Reviews', schema);

module.exports = model;

