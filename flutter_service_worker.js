'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "d25ebcdf0c18d4db6e409853e445f509",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "83f9100ef6ec8d0ac8ef57f822327ef1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cbdbc35bf2a7481a1c676a3b20e873d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "665dabc9c39d785be730af2b7052bea8",
".git/logs/refs/heads/main": "def04157be39c155143021e62a521cc4",
".git/logs/refs/heads/master": "75b89017da50791522a512ac70d4ca42",
".git/logs/refs/remotes/origin/main": "d883a6aa0dfdfdd546971c81b1e109f5",
".git/logs/refs/remotes/origin/master": "962429ee0fea0c674f9da72162dd3447",
".git/objects/00/c4b86702215c92292255091761b7a2d5be2137": "b5943dd0d1fd4982f6b512c5608744ee",
".git/objects/00/cc309ab969f901ea8c2155c5ed89ee08f0ce29": "fee7aebbdc9d1a56709208f6eb194999",
".git/objects/01/15af8fd7bee59acb009909ccc69046db09e7aa": "5966e222787a05ceee3adc7f12b8db57",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/fac2c9ea094bb3bc7d991ae0809a83b1d992af": "6ef17beae12504f86c2c8bce6736ca43",
".git/objects/0b/96dc96c8507b8ac462a0522d2c8c59ab16320e": "ad7f41765f1a08a85eaf3496911f1a69",
".git/objects/0d/3369f5669d7467e1ded2e1aeb508b073584bc9": "1bb4045586813e9cfb5c7b7b20646a01",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/8199738f12bf0adaa53e84b14addc0ba874493": "829f59483d2bb80faa95adb73e83ed8a",
".git/objects/16/a2c10d519b8e41cd5de100b5aeb75c0047dc78": "40e2acdb5ca0cd517bcd1cb42c1cdda1",
".git/objects/18/f7755dd6b1deff07dccf16b7bfc1290a435015": "ca6562018c7424e83da8db04b19174d0",
".git/objects/19/93eb2c17c492107e24caa572ef02d96b07563d": "d9f82b4a091890fb7d13e9248e20bc84",
".git/objects/1e/0f3acdade84bca5cafbfa3c9c95ad4f6e0ef07": "a5b9715081287bacf195e25f9a2abae2",
".git/objects/1e/f1e4828d1e23d532502ecce57c62dfd6c4fbda": "be11938af21fcc0963a51b6e6c179931",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/ad391a5c33311bc0c9529d6da09bd849e4ab1e": "ace65b4a41a2bf8f2e0a226619c23cb7",
".git/objects/26/4b3430d7189dc167a105baaeabb3fc6fab9036": "82ad03a1cfc00f4750edfde4a83a894e",
".git/objects/28/5de381a5a6a1adc3bb96653192b307eaca701a": "545d182b44c22f18c4e751c7c5c3ccd2",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/842feea3c2bc65b54e45affed37c8085f74689": "dd8e9eb415f35298a3b47c554e253b56",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/6f8eb2dbc1e501b511af8f7964fad3eddfc120": "c2f9f1bc4c0bcf435dffa12f2a1776aa",
".git/objects/32/79dd9077a1afacc05018ebdc7173af65a4bc7d": "9beddbf8e2b82d45ce3bdc35e86df77c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/1a2cbd5476b6ad2ea5a3a25437eba9f514602a": "95996769e6da9764a97c24ba813304bf",
".git/objects/40/01a697c556daf15366aa0f7c7979f6ba41457a": "e33d16acfbdcc1dd32e2945b206aa5b4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a38082f098d32cc14124704a766f939b07a7f7": "02da318103cb3c5729bf656548f6a515",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/fa243da354e94d86922b44162f8c939f6c0f5c": "b7daba64f32733c32e1ce029c73ea667",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/9a5d564f01773b2ad8c8c92f0b46005d83f5b3": "6458e59c827d699d81d13af8cd1dc879",
".git/objects/61/c7823b4e9745bdfcdd85fcd3a5a51d67a03e39": "41855688cd39925f348da1d6d71432c8",
".git/objects/63/c75d8941c855d507f4e400a6c4acd120fa5346": "3e51b89cf5d49d3c3b3665161c0c0da8",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/70/07daf9a5499c319873f1d3d0b26d3213155a6a": "719ba644b7edbc302b0ac60ce6357813",
".git/objects/71/31bc6f417b2d1b23cee7f4554b89c511cebeaf": "e1d8eeb5af4ed8459419fea3c896d640",
".git/objects/71/e09431248c7cebe8e377b70ce4587138ea3bec": "1bc78c1a7d973ede0540cec64df600c1",
".git/objects/73/228e0a44be99ed1d07d488d43a262f65dcc26b": "4cd7e924d7f76780822148e1a556bd00",
".git/objects/75/3598a0c0994bfe9ef019c3aacce144f0ac3708": "f1143c012a4bdf9d2815685c5a8d0997",
".git/objects/76/051e847efa0084fd3af12dd91b9380c1d4a2b8": "19d8e3aa1f5ab02f2496cdc40c5fe502",
".git/objects/76/75908954342df3376aa37af4930e9d170ee011": "07aaf3a247dea017b461e830fd187527",
".git/objects/80/99ff33a72bf185846d0100a647862f8969dff4": "c444105d84b617474039f07d98e42d54",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/ab2279bd36da4b139d859de3d533104cc940ed": "642425ae6983a77ea7d6a3b863221074",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5629d6222a53407a8c715634679d27788fb1bd": "b1e71e50031d9bb0df6e4e176300ecf8",
".git/objects/8d/0dc95cfda0916a09496d8fa997bdfc62eaf2fa": "f4bb7b9ba7c74a9c84d8bd9424a300e9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/b86b499418915d0e420579403accb55f144877": "0ae63e5084fc436679c3a39250d17b52",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/d4b654c0c7a4b74310830ab9c2dcca981b188b": "a207e07acfb8306453d4e9c898e7a51f",
".git/objects/97/02882cdbc64da03da6021c7a4465ab6ea196e6": "77db36ce2f2a23c483fa2822349ad620",
".git/objects/9d/43b6cca1f7698bad64f972f6b3295661541b23": "f7de90a64c4b5b0dd6a843e46ad7cced",
".git/objects/a3/3c51d77fbc1454a838fa01b03a2375f7a72432": "e6bae26e084c5b1a5785b95602adaefa",
".git/objects/a6/5a8790b2a0134b81dae897644b07ca0cedbef0": "143403f12edc2e686e0f49bb9a9a5eab",
".git/objects/a7/10bd9df68608ed3023ff8c3bf7deed6d38a688": "a0ce953a5a25d2531efa236fb19d6642",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/f3f7220babe748a8187edce941f2d0ee9c96ea": "8644c550b2d5145e8392782dd6156400",
".git/objects/af/97639ef3a03c649c60e6ca548b73d6869222a7": "686f54e60aac57fbf13f3d0f6a74d038",
".git/objects/b5/818eefd01b9c8356fd56b9908dd85ff8331c0f": "fc7da4128635230a15de2841a4504fd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8a3dde50b72884eb4c6d9b3b0c9fd3bd9edfdd": "f182c7f2896b00f4e4580567a8d6e04f",
".git/objects/ba/4b70820280eefda6a94fdc902e007cea1b8fbe": "cc65e9a9ed661a49f3c452788e9816f2",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/037f881381c54529c1df18896b5408aafa5d4f": "4e90444f7211ec45d6f7ac612e0c0ee8",
".git/objects/bd/f728bdbaa845cba900c92b977e957489c2fb8d": "b94daa929bc15de7b83917f3b9cc171c",
".git/objects/be/509f29da6c85cea81829802e984c6301b47333": "8cf8fc9e49f1636af2c03f3a3fe4e894",
".git/objects/c0/9fc2aad3daf51f13c2a78bdcfc7028f3560020": "a93166ba9209346afd660379f88eb0b2",
".git/objects/c1/e8227cc261b362f89524df6c8bf4fe8919248d": "4320d8b97d87c3227428fa24b5c4df59",
".git/objects/c3/32729ee294238700706198c8cff9c24e4f0084": "651ab43c4e7e7688a44e4f2dafe23b72",
".git/objects/c3/38f552dde4ad16123b1a4cea36d39710f1d07c": "7543a474cb351a6fe3a34f61c1586bf0",
".git/objects/c6/2cdc17b92c2a8c1afb8604fe94a6751832e45b": "6519c9bcd22956db974808b18b88d317",
".git/objects/cd/03a464b355448109e22375c07db1f8cc61a339": "ef7e9347ee329e952e29a33e35d85ed1",
".git/objects/cf/d2c055de42697a2c2d751acfc07907df921fc5": "18c90fdfedac3c04d9da1d76ee3d7dfa",
".git/objects/d3/6b3bf5465bc662c28758d44dce295151c7a214": "15ceb4e96575188f4d45d8b174c03eb9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/67647b9dc7287adc1a30d8b10f24976099ee8d": "6ae3ce15c5ba889366ad8e8e4ce8ae1d",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/bd98fa50c7502f1499f7dfa7932d209799980e": "5613dfe4a09b0da5d36976e39f56fb29",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/9c2d0cb4e5cce135da184a0fad21510a2853db": "607c331d63af0789bba3e67e85229d46",
".git/objects/e4/5075c68167144f910218920b136eaf9427e536": "6a44580f709c32c4d3bd194c0b042653",
".git/objects/e5/d55f67be96cf72bb996529a928042bd11c5eba": "6706f303371f935b4348a0fce3ace783",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/6d7a9d6712bba97eae29526776d8e90b1a9d05": "45047c38aa7832623c5feaab5508be20",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8ec3b0953f1e00ce0291cb5621ba43b44e6d67": "f4a7c0cc77b573c799ec7f6daf818cb1",
".git/objects/ef/cc629a593cd3f337c7603f1d8f99061927102a": "e88c9cea7f99050021e952f152b2b0da",
".git/objects/f0/e8ca5d654b43d6d87558b70887e68071b1e6e1": "54ec83fae40c3e0f37341b3bbfe273f0",
".git/objects/f2/d6f1d6f7f3ac23146d564d3d2f57b63d6c0f7e": "796f0d22fedd143571d41c3ed5c4fd32",
".git/objects/f2/deb1ce02ff8364e48b3a22c91f6cf26fde16d4": "b77e7d0f60136e8a576d324d79595e27",
".git/objects/fb/8a4771ebfbdbb146fef9d94ec0787ca259eb8a": "6edcc7b17f079c55a1f298dd71c9635f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/68844432747c24b67244825e21d91fb5f7e5b3": "0bd796b1de770719b77c3747baaeb891",
".git/objects/ff/dbf22795a0b2b7e86325b357a457ab4c6b32f7": "85ed2a3037490249825538e3b9efca49",
".git/ORIG_HEAD": "1ec4609bcafe6c82448819769ada25ac",
".git/refs/heads/main": "1ec4609bcafe6c82448819769ada25ac",
".git/refs/heads/master": "e39498f24ea5c781f20f8adad66d809c",
".git/refs/remotes/origin/main": "1ec4609bcafe6c82448819769ada25ac",
".git/refs/remotes/origin/master": "37aab1ffebeb1a41b53593a3eeaae4f0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ed23d30936ef05941f0192ce6ca9ac9",
"assets/NOTICES": "009ee3eb07b357721256406598d977f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "bf9bebff342de6a7a205bc143c44a203",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c422b433fe33b60723c794de16f692dc",
"/": "c422b433fe33b60723c794de16f692dc",
"main.dart.js": "7484c045744514fe78c668bf659d11e0",
"manifest.json": "a67d5a08ccc2090e4984e65645276fac",
"version.json": "a5e70cfebf8ee370ad7c36528e20e91d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
