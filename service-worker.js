const CACHE_NAME = 'darkroom-v2';
const OFFLINE_URL = '/offline.html';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  OFFLINE_URL,
  '/dist/bundle.js',
  '/app/styles/index.css',
  '/app/sound/darkRoomSONG.mp3',
  '/app/sound/vocal0.mp3',
  '/app/modules/levels/levels.burningbox.js',
  '/app/modules/cameras/cameras.burningbox.js',
  '/app/modules/levels/levels.dinner_party.js',
  '/app/modules/cameras/cameras.dinner_party.js',
  '/app/modules/levels/levels.procession_of_lizards.js',
  '/app/modules/cameras/cameras.procession_of_lizards.js',
  '/app/modules/levels/levels.train.js',
  '/app/modules/cameras/cameras.train.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(resp => {
      if (resp) return resp;
      return fetch(event.request).then(netResp => {
        if (event.request.url.includes('/modules/')) {
          caches.open(CACHE_NAME).then(c => c.put(event.request, netResp.clone()));
        }
        return netResp;
      });
    })
  );
});
