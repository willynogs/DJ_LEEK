var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  id: String,
  title: String,
  description: String,
  when: String,
  where: {
    lat: String,
    lon: String
  }
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
