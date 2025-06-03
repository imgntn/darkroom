import {precacheAndRoute, matchPrecache} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

// Offline fallback for navigation
registerRoute(({request}) => request.mode === 'navigate', async ({event}) => {
  try {
    return await fetch(event.request);
  } catch {
    return matchPrecache('/offline.html');
  }
});

// Cache game modules on demand
registerRoute(({url}) => url.pathname.startsWith('/modules/'), new StaleWhileRevalidate({cacheName: 'modules'}));
