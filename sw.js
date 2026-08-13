var CACHE_VERSION = 'v2';
var CACHE_NAME = 'hobbit-guide-' + CACHE_VERSION;

// Regenerate this list any time cards/fonts/icons change — see
// .scratch/glossary/hob-card-art-workflow.md for the maintenance note.
var PRECACHE_URLS = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "assets/og-image.jpg",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512-maskable.png",
  "assets/icons/icon-512.png",
  "assets/fonts/fonts.css",
  "assets/fonts/8vIJ7ww63mVu7gt7-GT7LEc.woff2",
  "assets/fonts/8vIJ7ww63mVu7gt79mT7.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9-U6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL95U6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL99U6g.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9wU6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9xU6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9yU6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9zU6ingQ.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR1SDk.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR2SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR4SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR5SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR6SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR7SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GRxSDktYw.woff2",
  "assets/fonts/daaHSScvJGqLYhG8nNt8KPPswUAPniZoadlESTE.woff2",
  "assets/fonts/daaHSScvJGqLYhG8nNt8KPPswUAPniZoadlKSTG7lQ.woff2",
  "assets/cards/arkenstone.jpg",
  "assets/cards/attercop.jpg",
  "assets/cards/bardbowman.jpg",
  "assets/cards/bardking.jpg",
  "assets/cards/bardscompany.jpg",
  "assets/cards/bejorn.jpg",
  "assets/cards/belladonna.jpg",
  "assets/cards/beornhospitality.jpg",
  "assets/cards/beornreluctant.jpg",
  "assets/cards/biffer.jpg",
  "assets/cards/bilbo.jpg",
  "assets/cards/bilboluckwearer.jpg",
  "assets/cards/bofur.jpg",
  "assets/cards/bowside.jpg",
  "assets/cards/bulg.jpg",
  "assets/cards/burnburntreefern.jpg",
  "assets/cards/butterflies.jpg",
  "assets/cards/celebmountainking.jpg",
  "assets/cards/chiefwarg.jpg",
  "assets/cards/chiefwargco.jpg",
  "assets/cards/confiscate.jpg",
  "assets/cards/crudebentblade.jpg",
  "assets/cards/dainironfoot.jpg",
  "assets/cards/dainlordiron.jpg",
  "assets/cards/dainscompany.jpg",
  "assets/cards/dancingdarkdawn.jpg",
  "assets/cards/deadlyslice.jpg",
  "assets/cards/desolationsmaug.jpg",
  "assets/cards/dori.jpg",
  "assets/cards/duskwatchhunter.jpg",
  "assets/cards/dwalin.jpg",
  "assets/cards/dwarvenmattock.jpg",
  "assets/cards/dwarvenmauler.jpg",
  "assets/cards/dwarvenshortsword.jpg",
  "assets/cards/eaglescoming.jpg",
  "assets/cards/eaglesrescue.jpg",
  "assets/cards/elvenkingshalls.jpg",
  "assets/cards/enchantedriver.jpg",
  "assets/cards/esgarothgarrison.jpg",
  "assets/cards/fearsomegoblinpair.jpg",
  "assets/cards/flunkies.jpg",
  "assets/cards/frontporch.jpg",
  "assets/cards/gandalfgoblinsbane.jpg",
  "assets/cards/gandalfspark.jpg",
  "assets/cards/gatheringdarkness.jpg",
  "assets/cards/getawaybarrel.jpg",
  "assets/cards/giantsboulder.jpg",
  "assets/cards/giganticbear.jpg",
  "assets/cards/gildedboat.jpg",
  "assets/cards/gleamingsplendor.jpg",
  "assets/cards/gloinmighty.jpg",
  "assets/cards/gnashingteeth.jpg",
  "assets/cards/goblinplatemail.jpg",
  "assets/cards/goblintownsaga.jpg",
  "assets/cards/golemriddle.jpg",
  "assets/cards/greatgoblin.jpg",
  "assets/cards/guardian.jpg",
  "assets/cards/gundabad.jpg",
  "assets/cards/headhunt.jpg",
  "assets/cards/hobbithole.jpg",
  "assets/cards/insideinfo.jpg",
  "assets/cards/ironhillsblacksmith.jpg",
  "assets/cards/kili.jpg",
  "assets/cards/laketown.jpg",
  "assets/cards/laketownlookout.jpg",
  "assets/cards/laketownmariners.jpg",
  "assets/cards/largebear.jpg",
  "assets/cards/lastlightdurin.jpg",
  "assets/cards/longbodiedgreydog.jpg",
  "assets/cards/longlakenuisance.jpg",
  "assets/cards/magend.jpg",
  "assets/cards/mirkwood.jpg",
  "assets/cards/mirkwoodnurturer.jpg",
  "assets/cards/mistymountainscold.jpg",
  "assets/cards/mistyraider.jpg",
  "assets/cards/momentofglory.jpg",
  "assets/cards/moonletters.jpg",
  "assets/cards/mountainking.jpg",
  "assets/cards/myprecious.jpg",
  "assets/cards/nighthowl.jpg",
  "assets/cards/noisemaker.jpg",
  "assets/cards/oldfatspider.jpg",
  "assets/cards/oldfatspidercreature.jpg",
  "assets/cards/oldthrush.jpg",
  "assets/cards/orcrist.jpg",
  "assets/cards/ordinarybear.jpg",
  "assets/cards/patient.jpg",
  "assets/cards/philli.jpg",
  "assets/cards/pinecone.jpg",
  "assets/cards/plunder.jpg",
  "assets/cards/provisioner.jpg",
  "assets/cards/prowler.jpg",
  "assets/cards/rabbit.jpg",
  "assets/cards/ragevalley.jpg",
  "assets/cards/raggedshortspear.jpg",
  "assets/cards/reverendhowl.jpg",
  "assets/cards/rhovanion.jpg",
  "assets/cards/rollroll.jpg",
  "assets/cards/settlewreckage.jpg",
  "assets/cards/sidedoor.jpg",
  "assets/cards/silvan.jpg",
  "assets/cards/smaug.jpg",
  "assets/cards/smaugcalamity.jpg",
  "assets/cards/smaugwickedworm.jpg",
  "assets/cards/smogfury.jpg",
  "assets/cards/snowslope.jpg",
  "assets/cards/soundtrumpets.jpg",
  "assets/cards/squirrel.jpg",
  "assets/cards/stingbilbo.jpg",
  "assets/cards/stirtrouble.jpg",
  "assets/cards/stonegiant.jpg",
  "assets/cards/stonesunlight.jpg",
  "assets/cards/stonyvoiced.jpg",
  "assets/cards/thorenlaststand.jpg",
  "assets/cards/thorin.jpg",
  "assets/cards/thorinmountain.jpg",
  "assets/cards/thranddecree.jpg",
  "assets/cards/thranduil.jpg",
  "assets/cards/thranduilcompany.jpg",
  "assets/cards/thranduilelvenking.jpg",
  "assets/cards/throrsmap.jpg",
  "assets/cards/tidingsofwar.jpg",
  "assets/cards/tomberwilliam.jpg",
  "assets/cards/trollneg.jpg",
  "assets/cards/troopponies.jpg",
  "assets/cards/uglygoblin.jpg",
  "assets/cards/uneasy.jpg",
  "assets/cards/unexpectedparty.jpg",
  "assets/cards/vowarrow.jpg",
  "assets/cards/wargling.jpg",
  "assets/cards/wargtactics.jpg",
  "assets/cards/weavemaster.jpg",
  "assets/cards/woodelves.jpg"];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.filter(function(n){ return n !== CACHE_NAME; }).map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// App shell (HTML/CSS/JS) — network-first, so a fresh deploy shows up right
// away when online, but still works offline from whatever was last cached.
// Everything else (card art, fonts, icons) — cache-first, since those files
// never change once downloaded, so there's no reason to re-fetch them.
var SHELL_PATHS = ['/', '/index.html', '/style.css', '/script.js'];

function isShellRequest(url){
  return SHELL_PATHS.some(function(p){ return url.pathname === p || url.pathname.endsWith(p); });
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  if(isShellRequest(url)){
    event.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); });
        return res;
      }).catch(function(){ return caches.match(req); })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); });
        return res;
      });
    })
  );
});
