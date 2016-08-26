
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://198.199.97.92/data');

db.on('error', console.error.bind(console, 'error: '));
db.once('open', function() {
  console.log('All is well');
});
module.exports = db;
