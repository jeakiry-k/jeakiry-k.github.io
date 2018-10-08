/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/hexo/public/2018/09/28/hello-world/index.html","2eacfe28f8b7d17b768f62323a730114"],["D:/blog/hexo/public/2018/10/08/netty入门篇/index.html","28659dbeb172bc4ef880ff61110da01a"],["D:/blog/hexo/public/about/index.html","6b48d74a80b63eefcd23e0a167d7619f"],["D:/blog/hexo/public/archives/2018/09/index.html","0fcc0ae2152cd71bfecc19d7b8ba60f5"],["D:/blog/hexo/public/archives/2018/10/index.html","89def5dcbe84654c2761deaae07ce9e4"],["D:/blog/hexo/public/archives/2018/index.html","db56b12f5180fb1d15cb9ac179b4f712"],["D:/blog/hexo/public/archives/index.html","c5cc73dad94a471d4202b22414c1395e"],["D:/blog/hexo/public/categories/Hexo教程/index.html","0b5af3c527ce3ad054b2c32effa23177"],["D:/blog/hexo/public/categories/index.html","45b9442ee72fb842f4edd114351de410"],["D:/blog/hexo/public/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["D:/blog/hexo/public/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["D:/blog/hexo/public/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["D:/blog/hexo/public/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["D:/blog/hexo/public/css/components/article.css","83b78d1a532f9581d1c500c723cde3c3"],["D:/blog/hexo/public/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["D:/blog/hexo/public/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["D:/blog/hexo/public/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["D:/blog/hexo/public/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["D:/blog/hexo/public/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["D:/blog/hexo/public/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["D:/blog/hexo/public/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["D:/blog/hexo/public/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["D:/blog/hexo/public/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["D:/blog/hexo/public/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["D:/blog/hexo/public/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["D:/blog/hexo/public/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["D:/blog/hexo/public/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["D:/blog/hexo/public/css/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["D:/blog/hexo/public/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["D:/blog/hexo/public/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["D:/blog/hexo/public/css/style.css","9cafc3b93b1cc09438df3c81db038f3f"],["D:/blog/hexo/public/images/bg.jpg","403dea8ec58af59de6e3411f05a86ae2"],["D:/blog/hexo/public/images/blog-bg.jpg","ef3b12051b4e240ed112d15b0e5fd38e"],["D:/blog/hexo/public/images/icon-heart.svg","8c26ba607a7768cffd34afe72980fde0"],["D:/blog/hexo/public/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["D:/blog/hexo/public/images/top-active.png","02e0be375bd990075ae7984107e541de"],["D:/blog/hexo/public/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["D:/blog/hexo/public/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["D:/blog/hexo/public/index.html","4eaa9cc5fa9ac5fda205a745abbbf93a"],["D:/blog/hexo/public/js/index.js","3ca4511f9c0702aec39b9bfca39a5c3a"],["D:/blog/hexo/public/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["D:/blog/hexo/public/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["D:/blog/hexo/public/tags/hexo/index.html","275d3e99c245d60e418c5dcb45adfa5e"],["D:/blog/hexo/public/tags/index.html","2a212900cdc0e57aaacc669a66c04bd4"],["D:/blog/hexo/public/tags/netty/index.html","f21736e7b8e20ee80fa5db43d350908d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







