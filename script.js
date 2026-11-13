(function(){
  var root=document.documentElement, btn=document.getElementById('tema');
  try{var t=localStorage.getItem('tema'); if(t==='dark'||t==='light') root.setAttribute('data-theme',t);}catch(e){}
  btn.addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next=dark?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('tema',next);}catch(e){}
  });
  document.getElementById('thn').textContent=new Date().getFullYear();
  var msg=encodeURIComponent('Halo Sakti, saya lihat website kamu dan ingin ngobrol soal pekerjaan.');
  document.getElementById('wa').href='https://wa.me/6289510489625?text='+msg;
})();
