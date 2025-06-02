import Backbone from 'backbone';
import app from './app.js';
import Router from './router.js';
import audio from './audioToggle.js';

app.router = new Router();

Backbone.history.start({
  pushState: false,
  root: app.root
});

if (audio && audio.initAudioToggle) {
  audio.initAudioToggle();
}

export default app;
