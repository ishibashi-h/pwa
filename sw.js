//キャッシュ名
var CACHE_NAME = "PWA-OFFLINE-CACHE";

//キャッシュするファイル名
var urlsToCache = [
  "index.html",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  "https://code.jquery.com/jquery-3.3.1.slim.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
  "app.js"
];

//インストール時処理
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// フェッチ時のキャッシュロード処理（2019/07/18 更新）
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// キャッシュファイルの設定と、インストール処理とキャッシュロード処理などを記述
// note: https://qiita.com/tsunet111/items/450728056ba92d35508c
