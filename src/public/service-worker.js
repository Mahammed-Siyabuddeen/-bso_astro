
const  CACHE_NAME='astro-chace-v1'

const urlToChache=['/']

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.addAll(urlToChache);
        })
    )
})

self.addEventListener('fetch',(event)=>{
    if(event.request.method === 'GET'){
        event.respondWith(
            fetch(event.request).then((networkResponse)=>{
                return caches.open(CACHE_NAME).then((cache)=>{
                    cache.put(event.request,networkResponse.clone())
                    return networkResponse;
                })
            }).catch(()=>{
                return caches.match(event.request).then((cachedResponse)=>{
                    if(cachedResponse){
                        return cachedResponse
                    }
            })
        })
    )
    }
})


self.addEventListener('activate',(event)=>{
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(
                cacheNames.map((cacheName)=>{
                    if(!cacheWhitelist.includes(cacheName)){
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})