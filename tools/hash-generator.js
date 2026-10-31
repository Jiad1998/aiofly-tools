(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("hash-generator",{cat:"security",ic:"#️⃣",t:"Hash Generator (SHA-256)",d:"Create SHA-1, SHA-256, SHA-384 and SHA-512 hashes from text.",
h:`<textarea id="i" placeholder="Type or paste text..."></textarea><div id="o"></div>`,
f:function(){
var A_=['SHA-1','SHA-256','SHA-384','SHA-512'];
function hex(b){return Array.from(new Uint8Array(b)).map(function(x){return ('0'+x.toString(16)).slice(-2)}).join('')}
function run(){var d=new TextEncoder().encode($('i').value);Promise.all(A_.map(function(a){return crypto.subtle.digest(a,d).then(hex)})).then(function(r){$('o').innerHTML=A_.map(function(a,i){return '<div class="box"><b>'+a+'</b><div class="res" style="word-break:break-all">'+r[i]+'</div><button type="button" class="hc" data-h="'+r[i]+'">Copy</button></div>'}).join('')})}
$('i').oninput=run;$('o').onclick=function(e){var b=e.target.closest('.hc');if(b)copyText(b.getAttribute('data-h'),b)};run();
},
how:["Type or paste your text.","The hashes appear straight away.","Tap Copy under the one you need."],
faq:[["What is a hash?","A hash is a fixed-length fingerprint of your text. A small change makes a completely different hash."],["Can a hash be reversed?","No. Hashes are one-way, so you cannot get the text back."]]});
})(AIO);
