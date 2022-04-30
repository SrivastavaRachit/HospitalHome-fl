const mongoose = require('../connection');

const schema = new mongoose.Schema({
    equipment: { type: mongoose.Types.ObjectId, ref: 'Equipments' },
    user: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date,
    data: Object,
    isrent: Boolean
})


const model = mongoose.model('Orders', schema);

module.exports = model;

