
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/shortlydb');

db.on('error', console.error.bind(console, 'error: '));
db.once('open', function() {
  console.log('All is well');
});
module.exports = db;
