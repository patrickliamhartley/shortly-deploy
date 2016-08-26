
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017');

db.on('error', console.error.bind(console, 'error: '));
db.once('open', function() {
  console.log('All is well');
});
module.exports = db;
