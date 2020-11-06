// Service Worker が利用可能かどうかの判定を行い、
// 利用可能であれば サービスワーカーの挙動を定義したJSファイル(ここでは sw.js) を登録する。
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker.register('./sw.js').then(function (registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function (err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa/sw.js').then(function (registration) {
    // 登録成功
    console.log('ServiceWorker の登録に成功しました。スコープ: ', registration.scope);
  }).catch(function (err) {
    // 登録失敗
    console.log('ServiceWorker の登録に失敗しました。', err);
  });
}
