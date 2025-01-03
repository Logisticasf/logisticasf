self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
      '/logisticasf/',
      '/logisticasf/index.html',
      '/logisticasf/manifest.json',
      '/logisticasf/android-chrome-192x192.png',
      '/logisticasf/android-chrome-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
