const CACHE  = "logistica-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./android-chrome-192x192.png",
  "./android-chrome-512x512.png",
  "./timofiejuk.html",
  // agrega aquí ./farmacia2.html, ./estilos.css, etc. si los tienes
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(
      res => res || fetch(e.request)
    )
  );
});
