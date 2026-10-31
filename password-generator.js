(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('password-generator',{cat:'gen',ic:'🔐',t:'Password Generator',d:'Create strong random passwords. They are made in your browser and never sent anywhere.',
h:`<label>Length: <span id="lv">16</span></label><input type="range" id="l" min="6" max="64" value="16">
<label class="ck"><input type="checkbox" id="c1" checked>Uppercase</label>
<label class="ck"><input type="checkbox" id="c2" checked>Lowercase</label>
<label class="ck"><input type="checkbox" id="c3" checked>Numbers</label>
<label class="ck"><input type="checkbox" id="c4" checked>Symbols</label><br>
<button id="go" type="button">Generate</button><button id="cp" type="button">Copy</button>
<div class="res"><div class="big" id="o" style="font-size:22px;word-break:break-all"></div><span id="st"></span></div>`,
f:function(){
  var sets=['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz','0123456789','!@#$%^&*()-_=+[]{};:,.?'];
  $('l').oninput=function(){$('lv').textContent=this.value;gen()};
  function gen(){
    var use=[];for(var i=0;i<4;i++){if($('c'+(i+1)).checked){use.push(sets[i])}}
    if(!use.length){$('o').textContent='Select at least one option';$('st').textContent='';return}
    var n=parseInt($('l').value),pool=use.join(''),a=[];
    use.forEach(function(s){a.push(s.charAt(rnd(s.length)))});
    while(a.length<n){a.push(pool.charAt(rnd(pool.length)))}
    a=a.slice(0,n);
    for(var j=a.length-1;j>0;j--){var k=rnd(j+1),t=a[j];a[j]=a[k];a[k]=t}
    $('o').textContent=a.join('');
    var sc=n+use.length*4;$('st').textContent='Strength: '+(sc<22?'Weak':(sc<32?'Good':'Strong'));
  }
  $('go').onclick=gen;
  ['c1','c2','c3','c4'].forEach(function(i){$(i).onchange=gen});
  $('cp').onclick=function(){copyText($('o').textContent,this)};
  gen();
},
how:['Move the slider to choose a length. 14 or more is best.','Tick the types of characters you want.','Press <b>Copy</b> and save it in a password manager.'],
faq:[['Is this password safe?','Yes. It is created with your browser\'s secure random generator and is never sent or stored anywhere.'],['How long should a password be?','Use at least 14 characters with letters, numbers and symbols. Never reuse the same password on different sites.']]});
})(AIO);
