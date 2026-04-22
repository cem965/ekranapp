self.addEventListener('install', e => e.waitUntil(caches.open('ekranapp-v1').then(c => c.addAll(['./']).catch(()=>{}))));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
