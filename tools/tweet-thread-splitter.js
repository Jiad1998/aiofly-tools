(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("tweet-thread-splitter",{cat:"text",ic:"🧵",t:"Post Splitter for X Threads",d:"Split long text into numbered parts that fit the character limit.",
h:`<textarea id="i" placeholder="Paste a long text"></textarea><div class="row"><label>Limit <input type="number" id="n" value="280" min="50"></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var lim=Math.max(50,parseInt(g('n'),10)||280),t=s.replace(/\s+/g,' ').trim();if(!t)return '';var w=t.split(' '),parts=[],cur='';var room=lim-8;w.forEach(function(x){if((cur+' '+x).trim().length>room){if(cur)parts.push(cur);cur=x}else cur=(cur+' '+x).trim()});if(cur)parts.push(cur);var n=parts.length;return parts.map(function(p,i){return p+' ('+(i+1)+'/'+n+')'}).join('\n\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your long text.","Set the limit (280 for X).","Copy each numbered part."],
faq:[["Why leave room?","Each part ends with a number like (2/5), so a few characters are kept free."],["Can I use it for SMS?","Yes. Set the limit to 160."]]});
})(AIO);
