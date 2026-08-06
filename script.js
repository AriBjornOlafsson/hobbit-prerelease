
(function(){
  var CARD_IMG = {
    arkenstone: "assets/cards/arkenstone.jpg",
    bardbowman: "assets/cards/bardbowman.jpg",
    bardking: "assets/cards/bardking.jpg",
    bardscompany: "assets/cards/bardscompany.jpg",
    bejorn: "assets/cards/bejorn.jpg",
    belladonna: "assets/cards/belladonna.jpg",
    beornhospitality: "assets/cards/beornhospitality.jpg",
    biffer: "assets/cards/biffer.jpg",
    bilbo: "assets/cards/bilbo.jpg",
    bowside: "assets/cards/bowside.jpg",
    bulg: "assets/cards/bulg.jpg",
    burnburntreefern: "assets/cards/burnburntreefern.jpg",
    butterflies: "assets/cards/butterflies.jpg",
    celebmountainking: "assets/cards/celebmountainking.jpg",
    chiefwarg: "assets/cards/chiefwarg.jpg",
    chiefwargco: "assets/cards/chiefwargco.jpg",
    confiscate: "assets/cards/confiscate.jpg",
    deadlyslice: "assets/cards/deadlyslice.jpg",
    desolationsmaug: "assets/cards/desolationsmaug.jpg",
    dori: "assets/cards/dori.jpg",
    dwalin: "assets/cards/dwalin.jpg",
    dwarvenmattock: "assets/cards/dwarvenmattock.jpg",
    eaglescoming: "assets/cards/eaglescoming.jpg",
    eaglesrescue: "assets/cards/eaglesrescue.jpg",
    enchantedriver: "assets/cards/enchantedriver.jpg",
    fearsomegoblinpair: "assets/cards/fearsomegoblinpair.jpg",
    flunkies: "assets/cards/flunkies.jpg",
    gandalfspark: "assets/cards/gandalfspark.jpg",
    gatheringdarkness: "assets/cards/gatheringdarkness.jpg",
    getawaybarrel: "assets/cards/getawaybarrel.jpg",
    giantsboulder: "assets/cards/giantsboulder.jpg",
    giganticbear: "assets/cards/giganticbear.jpg",
    gildedboat: "assets/cards/gildedboat.jpg",
    gloinmighty: "assets/cards/gloinmighty.jpg",
    gnashingteeth: "assets/cards/gnashingteeth.jpg",
    golemriddle: "assets/cards/golemriddle.jpg",
    greatgoblin: "assets/cards/greatgoblin.jpg",
    guardian: "assets/cards/guardian.jpg",
    gundabad: "assets/cards/gundabad.jpg",
    headhunt: "assets/cards/headhunt.jpg",
    hobbithole: "assets/cards/hobbithole.jpg",
    kili: "assets/cards/kili.jpg",
    laketown: "assets/cards/laketown.jpg",
    laketownlookout: "assets/cards/laketownlookout.jpg",
    longlakenuisance: "assets/cards/longlakenuisance.jpg",
    magend: "assets/cards/magend.jpg",
    mirkwood: "assets/cards/mirkwood.jpg",
    mistyraider: "assets/cards/mistyraider.jpg",
    moonletters: "assets/cards/moonletters.jpg",
    mountainking: "assets/cards/mountainking.jpg",
    myprecious: "assets/cards/myprecious.jpg",
    oldfatspider: "assets/cards/oldfatspider.jpg",
    oldfatspidercreature: "assets/cards/oldfatspidercreature.jpg",
    oldthrush: "assets/cards/oldthrush.jpg",
    orcrist: "assets/cards/orcrist.jpg",
    patient: "assets/cards/patient.jpg",
    philli: "assets/cards/philli.jpg",
    pinecone: "assets/cards/pinecone.jpg",
    plunder: "assets/cards/plunder.jpg",
    provisioner: "assets/cards/provisioner.jpg",
    prowler: "assets/cards/prowler.jpg",
    rabbit: "assets/cards/rabbit.jpg",
    ragevalley: "assets/cards/ragevalley.jpg",
    reverendhowl: "assets/cards/reverendhowl.jpg",
    rollroll: "assets/cards/rollroll.jpg",
    settlewreckage: "assets/cards/settlewreckage.jpg",
    silvan: "assets/cards/silvan.jpg",
    smaug: "assets/cards/smaug.jpg",
    smaugcalamity: "assets/cards/smaugcalamity.jpg",
    smogfury: "assets/cards/smogfury.jpg",
    snowslope: "assets/cards/snowslope.jpg",
    soundtrumpets: "assets/cards/soundtrumpets.jpg",
    squirrel: "assets/cards/squirrel.jpg",
    stingbilbo: "assets/cards/stingbilbo.jpg",
    stirtrouble: "assets/cards/stirtrouble.jpg",
    stonegiant: "assets/cards/stonegiant.jpg",
    stonesunlight: "assets/cards/stonesunlight.jpg",
    stonyvoiced: "assets/cards/stonyvoiced.jpg",
    thorenlaststand: "assets/cards/thorenlaststand.jpg",
    thorin: "assets/cards/thorin.jpg",
    thorinmountain: "assets/cards/thorinmountain.jpg",
    thranddecree: "assets/cards/thranddecree.jpg",
    thranduil: "assets/cards/thranduil.jpg",
    thranduilcompany: "assets/cards/thranduilcompany.jpg",
    throrsmap: "assets/cards/throrsmap.jpg",
    tomberwilliam: "assets/cards/tomberwilliam.jpg",
    trollneg: "assets/cards/trollneg.jpg",
    troopponies: "assets/cards/troopponies.jpg",
    uglygoblin: "assets/cards/uglygoblin.jpg",
    uneasy: "assets/cards/uneasy.jpg",
    vowarrow: "assets/cards/vowarrow.jpg",
    wargtactics: "assets/cards/wargtactics.jpg",

    dainironfoot: "assets/cards/dainironfoot.jpg",
    dainscompany: "assets/cards/dainscompany.jpg",
    dainlordiron: "assets/cards/dainlordiron.jpg",
    rhovanion: "assets/cards/rhovanion.jpg",
    dancingdarkdawn: "assets/cards/dancingdarkdawn.jpg",
    woodelves: "assets/cards/woodelves.jpg",
    attercop: "assets/cards/attercop.jpg",
    raggedshortspear: "assets/cards/raggedshortspear.jpg",
    crudebentblade: "assets/cards/crudebentblade.jpg",
    dwarvenshortsword: "assets/cards/dwarvenshortsword.jpg",
    goblinplatemail: "assets/cards/goblinplatemail.jpg",
    duskwatchhunter: "assets/cards/duskwatchhunter.jpg",
    noisemaker: "assets/cards/noisemaker.jpg",
    goblintownsaga: "assets/cards/goblintownsaga.jpg",
    largebear: "assets/cards/largebear.jpg",
    mirkwoodnurturer: "assets/cards/mirkwoodnurturer.jpg",
    weavemaster: "assets/cards/weavemaster.jpg",
    dwarvenmauler: "assets/cards/dwarvenmauler.jpg",
    nighthowl: "assets/cards/nighthowl.jpg",
    bofur: "assets/cards/bofur.jpg",
    esgarothgarrison: "assets/cards/esgarothgarrison.jpg",
    momentofglory: "assets/cards/momentofglory.jpg",
    sidedoor: "assets/cards/sidedoor.jpg",
    insideinfo: "assets/cards/insideinfo.jpg",
    laketownmariners: "assets/cards/laketownmariners.jpg",
    bilboluckwearer: "assets/cards/bilboluckwearer.jpg",
    frontporch: "assets/cards/frontporch.jpg",
    tidingsofwar: "assets/cards/tidingsofwar.jpg",
    wargling: "assets/cards/wargling.jpg",
    beornreluctant: "assets/cards/beornreluctant.jpg",
    thranduilelvenking: "assets/cards/thranduilelvenking.jpg",
    smaugwickedworm: "assets/cards/smaugwickedworm.jpg",
    lastlightdurin: "assets/cards/lastlightdurin.jpg",
    ordinarybear: "assets/cards/ordinarybear.jpg",
    longbodiedgreydog: "assets/cards/longbodiedgreydog.jpg",
    elvenkingshalls: "assets/cards/elvenkingshalls.jpg",
    gandalfgoblinsbane: "assets/cards/gandalfgoblinsbane.jpg",
    ironhillsblacksmith: "assets/cards/ironhillsblacksmith.jpg",
    mistymountainscold: "assets/cards/mistymountainscold.jpg",
    unexpectedparty: "assets/cards/unexpectedparty.jpg"
  };

  var pop = document.getElementById('cardpop');
  var elImg = document.getElementById('cp-img');
  var activeLink = null;

  function showCard(link){
    var key = link.getAttribute('data-card');
    var src = CARD_IMG[key];
    if(!src) return;
    elImg.src = src;
    elImg.alt = link.textContent;
    resetTilt();

    var margin = 10;
    var popW = Math.min(320, window.innerWidth - margin * 2);
    var popH = popW * (447 / 320);
    pop.style.width = popW + 'px';

    var rect = link.getBoundingClientRect();
    var left = rect.left + rect.width/2 - popW/2;
    left = Math.max(margin, Math.min(left, window.innerWidth - popW - margin));
    var top = rect.top - popH - 14;
    if(top < margin){ top = rect.bottom + 10; }
    if(top + popH > window.innerHeight - margin){
      top = Math.max(margin, (window.innerHeight - popH) / 2);
    }
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    pop.classList.add('show');
    link.classList.add('open');
    activeLink = link;
  }
  function hideCard(){
    pop.classList.remove('show');
    if(activeLink) activeLink.classList.remove('open');
    activeLink = null;
  }

  var cardFace = pop.querySelector('.cardpop-face');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MAX_TILT = 14;
  function tiltFromEvent(e, container){
    if(reduceMotion) return;
    var rect = container.getBoundingClientRect();
    var px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    var py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    var rotY = (px - 0.5) * MAX_TILT;
    var rotX = (0.5 - py) * MAX_TILT;
    cardFace.style.transform = 'perspective(650px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg)';
    cardFace.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
    cardFace.style.setProperty('--my', (py * 100).toFixed(1) + '%');
    pop.style.setProperty('--shadow-x', (-rotY * 1.1).toFixed(1) + 'px');
    pop.style.setProperty('--shadow-y', (20 - rotX * 1.1).toFixed(1) + 'px');
  }
  function resetTilt(){
    cardFace.style.transform = 'perspective(650px) rotateX(0deg) rotateY(0deg)';
    pop.style.setProperty('--shadow-x', '0px');
    pop.style.setProperty('--shadow-y', '20px');
  }

  var supportsHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll('.cardlink').forEach(function(link){
    var widenTo = link.closest('.chip') || link.parentElement;
    // Only widen the hover/click target to a shared ancestor when that
    // ancestor holds exactly one card mention. Otherwise, several cardlinks
    // sharing a paragraph/li would each bind their own listeners onto the
    // SAME container, and every hover would fire all of them — leaving only
    // the last-registered link's card ever actually shown, no matter which
    // one you pointed at.
    var container = (widenTo.querySelectorAll('.cardlink').length === 1) ? widenTo : link;
    link.setAttribute('tabindex','0');
    if(supportsHover){
      // Focus/blur (keyboard nav) only wired up here too — on touch devices,
      // tapping a tabindex="0" element fires a focus event before the tap's
      // synthetic click, and showCard()'s DOM mutation there makes the browser
      // cancel that pending click outright, silently breaking tap-to-open.
      container.addEventListener('mouseenter', function(){ showCard(link); });
      container.addEventListener('mousemove', function(e){ tiltFromEvent(e, container); });
      container.addEventListener('mouseleave', function(){ resetTilt(); hideCard(); });
      link.addEventListener('focus', function(){ showCard(link); });
      link.addEventListener('blur', function(){ resetTilt(); hideCard(); });
    }
    container.addEventListener('click', function(e){
      e.preventDefault();
      if(activeLink === link){ hideCard(); } else { showCard(link); }
    });
  });

  if(!supportsHover){
    // Touch: click to open (above), click to close (here) — no drag/tilt
    // gesture at all. cardFace only becomes tappable while the popup is
    // actually shown (see the .cardpop.show rule in CSS) so dragging
    // anywhere, including across the popped-up card, always just scrolls
    // the page natively rather than being captured for a tilt effect.
    cardFace.addEventListener('click', function(){ hideCard(); });
  }

  // tap outside the open preview (touch devices have no mouseleave) closes it
  document.addEventListener('click', function(e){
    if(!activeLink) return;
    var activeWidenTo = activeLink.closest('.chip') || activeLink.parentElement;
    var activeContainer = (activeWidenTo.querySelectorAll('.cardlink').length === 1) ? activeWidenTo : activeLink;
    if(!activeContainer.contains(e.target)){ hideCard(); }
  });

  // ambient embers rising from the banner
  (function spawnEmbers(){
    if(reduceMotion) return;
    var container = document.querySelector('.embers');
    if(!container) return;
    var count = 16;
    for(var i = 0; i < count; i++){
      var e = document.createElement('span');
      e.className = 'ember';
      e.style.left = (Math.random() * 100) + '%';
      e.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
      e.style.animationDuration = (5 + Math.random() * 5) + 's';
      e.style.animationDelay = (Math.random() * 8) + 's';
      container.appendChild(e);
    }
  })();
  document.addEventListener('scroll', hideCard, true);

  // tabs
  var tabs = document.querySelectorAll('.tab');
  var sections = document.querySelectorAll('.section');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); });
      sections.forEach(function(s){ s.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('sec-' + tab.getAttribute('data-tab')).classList.add('active');
      hideCard();
      window.scrollTo({top:0, behavior:'smooth'});
    });
    tab.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); tab.click(); }
    });
  });

  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('sw.js');
    });
  }
})();
