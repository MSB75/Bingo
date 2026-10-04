/* Kein Offline-Cache: Die App ist bewusst nur online vorgesehen. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
