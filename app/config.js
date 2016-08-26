
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/data');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error: '));
db.once('open', function() {
  console.log('All is well');
});
module.exports = db;
