var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aboutSchema = new Schema({
  about: String
});

var About = mongoose.model('About', aboutSchema);

module.exports = About;
