const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gustavosouza:G3u0g0a00@cluster0.uww6p0z.mongodb.net/biblioteca');

let db = mongoose.connection;

module.exports = db;