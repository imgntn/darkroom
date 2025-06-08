import Backbone from 'backbone';
import app from './app.js';
import Router from './router.js';
import { initAudioToggle } from './audioToggle.js';
import { initFullscreenToggle } from './fullscreenToggle.js';

app.router = new Router();

Backbone.history.start({
  pushState: false,
  root: app.root
});

initAudioToggle();
initFullscreenToggle();

// Lazily load overlay modules when first requested to reduce initial bundle size
let progressOverlayLoaded = false;
let helpOverlayLoaded = false;
let adminOverlayLoaded = false;
let settingsOverlayLoaded = false;

async function loadProgressOverlay() {
  if (!progressOverlayLoaded) {
    const mod = await import(/* webpackChunkName: "progress-overlay" */ './progressOverlay.js');
    mod.initProgressOverlay();
    progressOverlayLoaded = true;
  }
}

async function loadHelpOverlay() {
  if (!helpOverlayLoaded) {
    const mod = await import(/* webpackChunkName: "help-overlay" */ './helpOverlay.js');
    mod.initHelpOverlay();
    helpOverlayLoaded = true;
  }
}

async function loadAdminOverlay() {
  if (!adminOverlayLoaded) {
    const mod = await import(/* webpackChunkName: "admin-overlay" */ './adminOverlay');
    mod.initAdminOverlay();
    adminOverlayLoaded = true;
  }
}

async function loadSettingsOverlay() {
  if (!settingsOverlayLoaded) {
    const mod = await import(/* webpackChunkName: "settings-overlay" */ './settingsOverlay.js');
    mod.initSettingsOverlay();
    settingsOverlayLoaded = true;
  }
}

// Set up key listeners to load overlays on demand
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'KeyP':
      if (!progressOverlayLoaded) {
        loadProgressOverlay().then(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyP' }));
        });
      }
      break;
    case 'KeyH':
      if (!helpOverlayLoaded) {
        loadHelpOverlay().then(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyH' }));
        });
      }
      break;
    case 'KeyO':
      if (!adminOverlayLoaded) {
        loadAdminOverlay().then(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyO' }));
        });
      }
      break;
    case 'Escape':
      if (!settingsOverlayLoaded) {
        loadSettingsOverlay().then(() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
        });
      }
      break;
  }
});

// Hint browsers to prefetch overlay bundles after initial load
import(/* webpackPrefetch: true */ './progressOverlay.js');
import(/* webpackPrefetch: true */ './helpOverlay.js');
import(/* webpackPrefetch: true */ './adminOverlay');
import(/* webpackPrefetch: true */ './settingsOverlay.js');

export default app;
