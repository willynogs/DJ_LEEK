var express = require('express');
var mongoose = require('mongoose');
var Event = require('../db/EventMdl');
var About = require('../db/AboutMdl');
var Asset = require('../db/AssetMdl');
var hooks = require('../contentful.calls');
var router = express.Router();

router.get('/events', function(req, res){
  Event.find({}, function(err, events){
    if (err) console.log(err);
    res.json(events);
  })
});

router.get('/about', function(req, res){
  About.find({}, function(err, events){
    if (err) console.log(err);
    res.json(events);
  })
});

router.get('/images', function(req, res){
  Asset.find({}, function(err, events){
    if (err) console.log(err);
    res.json(events);
  })
});

/* GET entries for a type */
router.get('/content/:type', function(req, res) {
  if(req.params.type == 'event') {
    Event.find({}, function(err, events){
      if (err) console.log(err);
      res.json(events);
    });
  }
  if(req.params.type == 'about') {
    About.find({}, function(err, about){
      if (err) console.log(err);
      res.json(about);
    });
  }
  if(req.params.type == 'image') {
    Asset.find({}, function(err, events){
      if (err) console.log(err);
      res.json(events);
    });
  }
});

router.post('/webhook', function(req, res) {
  /*~~ ADD ASSET ~~*/
  if(req.headers['x-contentful-topic'] == 'ContentManagement.Asset.publish') {
    hooks.webhookAssetAdd(req);
  }

  /*~~ REMOVE ASSET ~~*/
  if(req.headers['x-contentful-topic'] == 'ContentManagement.Asset.unpublish') {
    hooks.webhookAssetRemove(req);
  }

  /*~~ ADD ENTRY ~~*/
  if(req.headers['x-contentful-topic'] == 'ContentManagement.Entry.publish') {
    var type = req.body.sys.contentType.sys.id;
    if (type == 'event') hooks.webhookEventAdd(req);
    if (type == 'about') hooks.webhookAboutUpdate(req);
  }

  /*~~ DELETE ENTRY ~~*/
  if(req.headers['x-contentful-topic'] == 'ContentManagement.Entry.unpublish') {
    var type = req.body.sys.contentType.sys.id;
    if (type == 'event') hooks.webhookEventDelete(req);
  }

  res.json({message: "Success"});
});

module.exports = router;
