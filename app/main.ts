import Backbone from 'backbone';
import app from './app.js';
import Router from './router.js';
import { initAudioToggle } from './audioToggle.js';
import { initProgressOverlay } from './progressOverlay.js';
import { initHelpOverlay } from './helpOverlay.js';

app.router = new Router();

Backbone.history.start({
  pushState: false,
  root: app.root
});

initAudioToggle();
initProgressOverlay();
initHelpOverlay();

export default app;
