const C='kubali-v7',F=['./','index.html','signup.html','manifest.webmanifest','icon.svg','config.json','custodians.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
const put=(r,n)=>{const cp=n.clone();caches.open(C).then(c=>c.put(r,cp));return n};
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
if(/\.json(\?|$)/.test(r.url))return e.respondWith(fetch(r).then(n=>put(r,n)).catch(()=>caches.match(r)));
e.respondWith(caches.match(r).then(x=>x||fetch(r).then(n=>put(r,n)).catch(()=>caches.match('index.html'))))});
