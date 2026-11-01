(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("word-frequency-counter",{cat:"text",ic:"📊",t:"Word Frequency Counter",d:"Count how many times each word appears in your text.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var w=s.toLowerCase().match(/[\p{L}\p{N}']+/gu)||[];var m={};w.forEach(function(x){m[x]=(m[x]||0)+1});var a=Object.keys(m).sort(function(a,b){return m[b]-m[a]||a.localeCompare(b)});return 'Total words: '+w.length+'  |  Unique words: '+a.length+'\n\n'+a.slice(0,200).map(function(k){return k+': '+m[k]}).join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your text.","The most used words are listed with their count.","Copy the result if you need it."],
faq:[["Is it case sensitive?","No. \"Word\" and \"word\" are counted together."],["Does it work for Bangla?","Yes. It counts words in any language."]]});
})(AIO);
