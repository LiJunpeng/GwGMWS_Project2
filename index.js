let cacheName = 'restaurant_review_cache';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        'css/index.css',
        'css/restaurant.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log("fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {

      let fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function(response) {
      	let result = response.clone();

      	caches.open(cacheName).then(function(cache) {
      		cache.put(event.request, result);
      	});

      	return response;
      	});
      }
    })
  );
});