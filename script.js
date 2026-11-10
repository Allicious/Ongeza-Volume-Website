(function(){
  var root=document.documentElement,queued=false;
  function update(){
    var p=Math.min(window.scrollY/(window.innerHeight*1.1),1);
    root.style.setProperty('--fade',((1-p)*(1-p)).toFixed(3));
    queued=false;
  }
  window.addEventListener('scroll',function(){if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});
  update();
})();

/* Mobile menu */
(function(){
  var nav=document.querySelector('nav'),btn=document.querySelector('.menu-btn');
  if(!nav||!btn)return;
  function set(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');}
  btn.addEventListener('click',function(){set(!nav.classList.contains('open'));});
  nav.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
  document.addEventListener('click',function(ev){if(!nav.contains(ev.target))set(false);});
  document.addEventListener('keydown',function(ev){if(ev.key==='Escape')set(false);});
  window.addEventListener('resize',function(){if(window.innerWidth>820)set(false);});
})();
