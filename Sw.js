self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('dhruv-tracker').then((cache) => cache.addAll([
      'Index.html',
      'Manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
