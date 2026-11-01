(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("jwt-decoder",{cat:"dev",ic:"🪙",t:"JWT Decoder",d:"Read the header and payload of a JSON Web Token. Nothing is sent anywhere.",
h:`<textarea id="i" placeholder="Paste a JWT token here"></textarea><div class="res" id="e"></div><div class="box"><b>Header</b><pre id="h" style="white-space:pre-wrap;word-break:break-all"></pre></div><div class="box"><b>Payload</b><pre id="p" style="white-space:pre-wrap;word-break:break-all"></pre></div>`,
f:function(){
function d(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return decodeURIComponent(Array.from(atob(s)).map(function(c){return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)}).join(''))}
function run(){var t=$('i').value.trim().split('.');$('e').textContent='';$('h').textContent='';$('p').textContent='';if(!t[0])return;if(t.length<2){$('e').textContent='A JWT has three parts separated by dots.';return}try{$('h').textContent=JSON.stringify(JSON.parse(d(t[0])),null,2);var p=JSON.parse(d(t[1]));$('p').textContent=JSON.stringify(p,null,2);if(p.exp)$('e').textContent='Expires: '+new Date(p.exp*1000).toString()+(p.exp*1000<Date.now()?' (expired)':'')}catch(e){$('e').textContent='Could not decode this token.'}}
$('i').oninput=run;
},
how:["Paste your JWT token.","Read the header and payload.","Check the expiry time if it has one."],
faq:[["Is it safe to paste a token?","The decoding happens on your device. Still, never share live tokens with other people."],["Does it check the signature?","No. It only reads the contents."]]});
})(AIO);
