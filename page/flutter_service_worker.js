'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/icon-512-maskable.png": "d0a2b124ad6d10f7cbe71b9e9647b058",
"icons/icon-192.png": "42f58653c668327834ffa794da1384f1",
"icons/icon-192-maskable.png": "6c94805c0028594e44ad5a85cf8930d0",
"icons/icon-512.png": "e8f446aaf2a327066e46deab40bfba63",
"version.json": "94dbf51cc9cdcdb86156b2afadd35edc",
"flutter_bootstrap.js": "282415807c9388b2fb5d2cc618ded079",
"manifest.json": "f1d01b2c2b79e86dd90f1a0fb91b52fa",
"main.dart.js": "75861d5e4073255847ea2bde4a33ee7e",
"index.html": "f3455d6f5fe04c1b63e23208e28c7ef8",
"/": "f3455d6f5fe04c1b63e23208e28c7ef8",
"assets/AssetManifest.json": "64e00a336784dfcc2bf6f72b6b54bdb7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "8e0826e18bdf530c1f4cba012a9effa5",
"assets/AssetManifest.bin": "0d120918c7a4a11e852811465fe1fc37",
"assets/packages/b2nkuu_resource/information/information.yaml": "d1360d46ae42fae2dc689af800f98e73",
"assets/packages/b2nkuu_resource/information/image/experience-bighead.png": "25743957c170aa89a3bb98b762764793",
"assets/packages/b2nkuu_resource/information/image/blog-iiuud2art.png": "635818791564e0a75558764cc2d056b7",
"assets/packages/b2nkuu_resource/information/image/skill-golang.png": "c6b81e70134b43bb2b47449c7c38c969",
"assets/packages/b2nkuu_resource/information/image/experience-uih.png": "982de82d2cf2b03baf2df5c84699e99d",
"assets/packages/b2nkuu_resource/information/image/experience-nysiis.png": "9d93139d193c5b66443566b056b616f7",
"assets/packages/b2nkuu_resource/information/image/skill-flutter.png": "413579467858c65487657e32e3d8aa08",
"assets/packages/b2nkuu_resource/information/image/experience-tdev.png": "e7e4f113cb98bb3fb0a96b3ef6c0cfb2",
"assets/packages/b2nkuu_resource/information/image/experience-pinperty.png": "b6191c0f05af0d41eb32c861c62ec7db",
"assets/packages/b2nkuu_resource/information/image/contributor-mytonwallet.png": "7ae6d4080fa3b3a6bbc5cc6d0d052dc9",
"assets/packages/b2nkuu_resource/information/image/skill-echo.png": "c6415c17e2ed0501868cf9861073adaf",
"assets/packages/b2nkuu_resource/information/image/skill-firebase.png": "122a33375849adc980067d9cfff5c86b",
"assets/packages/b2nkuu_resource/information/image/skill-riverpod.png": "115b1051421afae8c3775668e2d39499",
"assets/packages/b2nkuu_resource/information/image/skill-grpc.png": "a632bf9cbfd8b0a5550b7403ea5f831a",
"assets/packages/b2nkuu_resource/information/image/skill-reactivex.png": "2f6645a659c2df63e83d5003d1dc707d",
"assets/packages/b2nkuu_resource/information/image/skill-ton.png": "dcfdb015e04e8ff801783c181811063e",
"assets/packages/b2nkuu_resource/information/image/skill-freezed.png": "4e8a4228ce7bc944052628e73afa57e8",
"assets/packages/b2nkuu_resource/information/image/contributor-fluttergen.png": "3a7d3fe7f7a69f6909d4c4ae5e7f41b5",
"assets/packages/b2nkuu_resource/information/image/email-sign-tpit.png": "58f74f7b7232e6f3ad971dca412f8306",
"assets/packages/b2nkuu_resource/information/image/skill-autoroute.png": "59c774f60c9d34b98945d132f2af22e9",
"assets/packages/b2nkuu_resource/information/image/skill-other.png": "6950a2522c81b31e3202524266150833",
"assets/packages/b2nkuu_resource/information/image/skill-dart.png": "882ad0d30c44f79fafe77cf6b4627f80",
"assets/packages/b2nkuu_resource/information/image/skill-gofiber.png": "6202281b55776386c46ac3c4329e4abf",
"assets/packages/b2nkuu_resource/information/image/blog-iiuutonton.png": "684ba3b9ca07ae5e09e5d31d881af090",
"assets/packages/b2nkuu_resource/information/image/experience-kayena.png": "0c2e56a1423f262c91388b99b89e0f95",
"assets/packages/b2nkuu_resource/information/rive/b2nkuu-info-logo.riv": "0a07cd800bf9e374e16c2aa7976c6308",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "1b8fea831477e5dfaf1891a3edc72b2d",
"assets/NOTICES": "03de6cffdaf8c69026f24bf4c40f7382",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"favicon.png": "776857794a22e09031f12fd863a2b887"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
