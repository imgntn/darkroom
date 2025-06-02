const CACHE_NAME = 'darkroom-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/dist/bundle.js',
  '/app/styles/index.css',
  '/app/sound/darkRoomSONG.mp3',
  '/app/sound/vocal0.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
