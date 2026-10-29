(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('social-media-bio-generator',{cat:'social',ic:'📝',t:'Social Media Bio Generator',d:'Make a catchy bio for Instagram, TikTok or Facebook in seconds.',
h:`<div class="row"><div><label>Your name</label><input type="text" id="n" placeholder="Rafi"></div>
<div><label>Your topic / job</label><input type="text" id="t" placeholder="travel"></div></div>
<div class="row"><div><label>Platform</label><select id="p"><option value="150">Instagram (150)</option><option value="80">TikTok (80)</option><option value="101">Facebook intro (101)</option></select></div>
<div><label>Style</label><select id="s"><option value="fun">Fun</option><option value="pro">Professional</option><option value="cool">Cool</option></select></div></div>
<button id="go" type="button">Generate bios</button>
<div id="o"></div>`,
f:function(){
  var T={
  fun:['{n} ✨ {t} vibes only 🎯','{t} lover 💖 | {n}','Just here for {t} 😎 | {n}','{n} | Living for {t} 🌈','Good vibes + {t} = me 🔥','{t} all day, every day 🚀','Hi, I am {n} 👋 {t} is my thing ✨','Smile more 😊 {t} • {n}'],
  pro:['{n} | {t}','{t} Specialist • {n}','Helping you with {t} | {n}','{n} – Passionate about {t} 💼','{t} • Quality • Trust | {n}','Sharing practical {t} tips 📌 | {n}','Official page of {n} | {t}','{n} • {t} • DM for business 📩'],
  cool:['{t} 🖤 {n}','{n} ⚡ {t}','Not perfect, just {t} 🔥','{n} | {t} | 🌍','Be real. Be {t}. 💫','{t}. Period. ✌️','{n} 🌙 {t}','Made for {t} ⚡']};
  function shuffle(a){for(var i=a.length-1;i>0;i--){var j=rnd(i+1),x=a[i];a[i]=a[j];a[j]=x}return a}
  $('go').onclick=function(){
    var n=$('n').value.trim(),t=$('t').value.trim(),lim=parseInt($('p').value),o=$('o');
    o.innerHTML='';
    if(!n||!t){o.innerHTML='<p class="note">Please enter your name and topic.</p>';return}
    var list=shuffle(T[$('s').value].slice()).map(function(x){return x.replace(/\{n\}/g,n).replace(/\{t\}/g,t)}).filter(function(x){return x.length<=lim}).slice(0,6);
    if(!list.length){o.innerHTML='<p class="note">Your words are too long for this platform. Try a shorter name or topic.</p>';return}
    list.forEach(function(b){
      var d=document.createElement('div');d.className='box';
      var p=document.createElement('div');p.textContent=b;p.style.fontSize='18px';
      var s=document.createElement('small');s.textContent=b.length+' / '+lim+' characters';
      var bt=document.createElement('button');bt.type='button';bt.textContent='Copy';bt.onclick=function(){copyText(b,bt)};
      d.appendChild(p);d.appendChild(s);d.appendChild(document.createElement('br'));d.appendChild(bt);o.appendChild(d);
    });
  };
},
how:['Type your name and your topic or job.','Choose the platform and style.','Press <b>Generate bios</b>, pick the one you like and press <b>Copy</b>.'],
faq:[['What are the bio length limits?','Instagram allows 150 characters, TikTok 80 and a Facebook intro about 101. The tool only shows bios that fit.'],['Can I edit the bio?','Yes. Copy it, paste it in your app and change anything you like.']]});
})(AIO);
