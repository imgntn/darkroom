import Backbone from 'backbone';
import app from './app.js';
import Router from './router.js';
import { initAudioToggle } from './audioToggle.js';

app.router = new Router();

Backbone.history.start({
  pushState: false,
  root: app.root
});

initAudioToggle();

export default app;
