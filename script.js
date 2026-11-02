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
