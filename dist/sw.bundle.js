if(!self.define){let e,i={};const d=(d,n)=>(d=new URL(d+".js",n).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const c=e=>d(e,s),o={module:{uri:s},exports:a,require:c};i[s]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3dc2bb2b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"192.bundle.js",revision:"417f8058bf773d5c087613724b456c03"},{url:"1f6352ad99bb9b8c2661.jpg",revision:null},{url:"2.bundle.js",revision:"b4f3be255d771855271aa62de1fde401"},{url:"9a881c5c7797ef593d80.jpg",revision:null},{url:"app.webmanifest",revision:"cf5ba55b30342afd528c68205ba0c4a7"},{url:"app~04e4ec69.bundle.js",revision:"564faa14c0ea3be7fb69db3263576290"},{url:"app~309f7e27.bundle.js",revision:"6c04b43e94e3ab7244007a3b66b1e2eb"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~7bd12dde.bundle.js",revision:"7092222edb9ee05d82e290c528fd2e5b"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"546bb00b42532ae4ce61acd72d528e40"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"d8eec3da9081d7c4abac34aa873b531c"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/heros/hero-image_3-large.jpg",revision:"0778d8558c684131c0208a5977b90f36"},{url:"images/heros/hero-image_3-small.jpg",revision:"66a5856f2e002295cbfc62f19507b53a"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"index.html",revision:"0495a9da11d3791e088612d7bd2ad515"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"CACHE_NAME",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map