console.log('To aqui');
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-v2').then(function(cache) {
      return cache.addAll([
        '/',
        '/login',
        '/icons/logo-512.png'
      ]);     
    })   
  ); 
});

console.log('To aqui 3');

self.addEventListener('fetch', function(event) {
  console.log('fetching', {event});
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log({ response });
      return response || fetch(event.request);
    })   
  ); 
});
