(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pubg-name-styler",{cat:"social",ic:"🎮",t:"PUBG Name Styler",d:"Make stylish PUBG Mobile and BGMI nicknames with special fonts and symbols. Copy and paste in-game.",
h:`<label>Your name</label><input type="text" id="i" value="AioFly" maxlength="20"><div id="o"></div>`,
f:function(){
var N={A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ'};
function mk(off,up,lo){return function(s){return s.split('').map(function(ch){var c=ch.charCodeAt(0);if(c>=65&&c<=90)return String.fromCodePoint(up+c-65);if(c>=97&&c<=122)return String.fromCodePoint(lo+c-97);return ch}).join('')}}
var fonts=[['Bold',mk(0,0x1D400,0x1D41A)],['Italic bold',mk(0,0x1D468,0x1D482)],['Script bold',mk(0,0x1D4D0,0x1D4EA)],['Gothic',mk(0,0x1D56C,0x1D586)],['Double struck',mk(0,0x1D538,0x1D552)],['Monospace',mk(0,0x1D670,0x1D68A)],['Sans bold',mk(0,0x1D5D4,0x1D5EE)],['Small caps',function(s){var sc='ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';return s.split('').map(function(ch){var c=ch.toLowerCase().charCodeAt(0);return c>=97&&c<=122?sc[c-97]:ch}).join('')}],['Circled',function(s){return s.split('').map(function(ch){var c=ch.charCodeAt(0);if(c>=65&&c<=90)return String.fromCodePoint(0x24B6+c-65);if(c>=97&&c<=122)return String.fromCodePoint(0x24D0+c-97);return ch}).join('')}]];
var decos=[["", ""], ["꧁", "꧂"], ["『", "』"], ["✦ ", " ✦"], ["︻╦̵̵͇̿̿╤──  ", ""]];
function run(){var s=$('i').value||'Player';var out=[];fonts.forEach(function(f){var t=f[1](s);decos.forEach(function(d,k){if(k<3||f[0]==='Bold'||f[0]==='Gothic')out.push(d[0]+t+d[1])})});
$('o').innerHTML=out.map(function(x,i){return '<div class="cp-r" style="display:flex;gap:8px;align-items:center;padding:6px 0;border-bottom:1px solid rgba(128,128,128,.25)"><span style="flex:1;word-break:break-all;font-size:18px">'+esc(x)+'</span><button type="button" data-i="'+i+'" style="padding:6px 10px">Copy</button></div>'}).join('');
[].forEach.call($('o').querySelectorAll('button'),function(b){b.onclick=function(){copyText(out[+b.getAttribute('data-i')],b)}})}
$('i').oninput=run;run();
},
how:["Type your name.","Scroll through the styles and press <b>Copy</b> on the one you like.","Paste it as your nickname in PUBG Mobile or BGMI."],
faq:[["Will every style work in PUBG?","Most do, but the game may reject a few symbols. If one is refused, try another style."],["Is it free?","Yes, completely free, with no sign-up."]]});
})(AIO);
