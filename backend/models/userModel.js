const mongoose = require('../connection');

const schema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    age: Number,
    created: Date,
    isadmin: Boolean,
    avatar: String
})


const model = mongoose.model('Users', schema);

module.exports = model;
