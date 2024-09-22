// service-worker.js
self.addEventListener('install', function(event) {
    console.log('Service worker installed');
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  