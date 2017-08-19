var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assetSchema = new Schema({
  id: String,
  title: String,
  description: String,
  url: String
});

var Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
