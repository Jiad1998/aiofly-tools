(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("bionic-reading-converter",{cat:"text",ic:"👓",t:"Bionic Reading Converter",d:"Bold the first letters of each word to read faster.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Bold part <select id="p"><option value="0.4">Short</option><option value="0.5" selected>Half</option><option value="0.65">Long</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var p=parseFloat(g('p'))||.5;return s.replace(/[A-Za-zঀ-৿']+/g,function(w){var n=Math.max(1,Math.ceil(w.length*p));return w.slice(0,n).replace(/[\s\S]/g,function(c){var m={a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇'};if(m[c])return m[c];if(c>='A'&&c<='Z')return String.fromCodePoint(0x1D5D4+c.charCodeAt(0)-65);return c})+w.slice(n)})})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your English text.","Choose how much of each word to bold.","Copy the text and paste it into any app."],
faq:[["Does it work in all apps?","The bold letters are special Unicode characters, so most apps show them."],["Does it work for Bangla?","No. Bangla letters have no bold Unicode version, so they stay the same."]]});
})(AIO);
