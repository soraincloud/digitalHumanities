if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let u={};const o=e=>n(e,l),c={module:{uri:l},exports:u,require:o};i[l]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(s(...e),u)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"front_dig"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.79d7a641.css",revision:null},{url:"css/chunk-vendors.0d936950.css",revision:null},{url:"img/A.70d6fcfe.jpg",revision:null},{url:"img/C.ad58b67e.jpg",revision:null},{url:"img/D.028e4a81.jpg",revision:null},{url:"img/after1.a2dc616c.png",revision:null},{url:"img/after2.a59bb52c.png",revision:null},{url:"img/after3.b9987154.png",revision:null},{url:"img/after4.ff3d9e54.png",revision:null},{url:"img/box.c6c576f7.png",revision:null},{url:"index.html",revision:"b6c68cc7ddb74c25502af52224cdb374"},{url:"js/17.8fdb287f.js",revision:null},{url:"js/41.d21e97a3.js",revision:null},{url:"js/561.6b94dec4.js",revision:null},{url:"js/app.8e6e330d.js",revision:null},{url:"js/chunk-vendors.eaab99c7.js",revision:null},{url:"manifest.json",revision:"8e4e5ba75b23a40e25d8d422fbaf051a"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
