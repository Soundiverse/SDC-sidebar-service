const mongoose = require('mongoose');
const dockerDB = '172.17.0.3'; //replace localhost with when deploying
mongoose.connect('mongodb://localhost:27017/sidebarcomponent', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', function (err) {
    console.log('connection error ', err);
  })
  db.on('connected', function () {
    console.log('leggo mongoo');
  })
  db.on('disconnected', function () {
    console.log('mongo disconnected');
  })

module.exports = db;