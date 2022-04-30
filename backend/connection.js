const mongoose = require('mongoose');

const conn_url = require('./config').db_url;

mongoose.connect(conn_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('databse successfully connected'))
    .catch(err => console.error(err));


module.exports = mongoose;