var contentful = require('contentful');
var mongoose = require('mongoose');
var Event = require('./db/EventMdl');
var About = require('./db/AboutMdl');
var Asset = require('./db/AssetMdl');

module.exports = {
  webhookEventAdd: function (req) {
    var entry = req.body.fields;
    Event.findOne({ 'id': req.body.sys.id }, function(err, doc) {
      if (err) console.log(err);
      if(doc) {
        doc.title = entry.title['en-US'];
        doc.description = entry.description['en-US'];
        doc.when = entry.when['en-US'];
        doc.where.lat = entry.where['en-US'].lat;
        doc.where.lon = entry.where['en-US'].lon;
        doc.save(function(err, updatedDoc){
          if (err) console.log(err);
        });
      } else {
        var new_doc = new Event({
          id: req.body.sys.id,
          title: entry.title['en-US'],
          description: entry.description['en-US'],
          when: entry.when['en-US'],
          where: {
            lat: entry.where['en-US'].lat,
            lon: entry.where['en-US'].lon
          }
        });
        new_doc.save(function(err, savedDoc){
          if (err) console.log(err);
        });
      }
    });
  },
  webhookEventDelete: function (req) {
    Event.remove({ 'id': req.body.sys.id }, function(err){
      if (err) console.log(err);
    });
  },
  webhookAboutUpdate: function (req) {
    About.findOne({}, function(err, doc){
      if (err) console.log(err);
      if(doc) {
        doc.about = req.body.fields.about['en-US'];
        doc.save(function(err, updatedDoc){
          if (err) console.log(err);
        });
      } else {
        var new_doc = new About({
          about: req.body.fields.about['en-US']
        });

        new_doc.save(function(err, savedDoc){
          if (err) console.log(err);
        });
      }
    });
  },
  webhookAssetAdd: function (req) {
    var fields = req.body.fields;
    var id = req.body.sys.id;
    var title = fields.title['en-US'];
    var description = fields.description['en-US'];
    var url = fields.file['en-US'].url;

    Asset.findOne({ 'id': id }, function(err, doc){
      if (err) console.log(err);
      if(doc) {
        doc.title = title;
        doc.description = description;
        doc.url = url;
        doc.save(function(err, savedDoc){
          if (err) console.log(err);
        })
      } else {
        var new_doc = new Asset({
          id: id,
          title: title,
          description: description,
          url: url
        });

        new_doc.save(function(err, savedDoc){
          if (err) console.log(err);
        });
      }
    });
  },
  webhookAssetRemove: function (req) {
    var id = req.body.sys.id;
    Asset.remove({ 'id': id }, function(err, doc){
      if (err) console.log(err);
    });
  },
};
