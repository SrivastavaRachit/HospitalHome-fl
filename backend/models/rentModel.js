const mongoose = require('../connection');

const schema = new mongoose.Schema({
    service: { type: mongoose.Types.ObjectId, ref: 'Nursing' },
    user: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date,
    data: Object,
})


const model = mongoose.model('ServiceRents', schema);

module.exports = model;

