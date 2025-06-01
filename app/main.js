define(function(require){
  'use strict';
  var app = require('app');
  var Router = require('router');
  var audio = require('audioToggle');

  app.router = new Router();

  Backbone.history.start({
    pushState: false,
    root: app.root
  });

  if(audio && audio.initAudioToggle){
    audio.initAudioToggle();
  }
});
