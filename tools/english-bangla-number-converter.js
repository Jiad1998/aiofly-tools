(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("english-bangla-number-converter",{cat:"convert",ic:"🔤",t:"English to Bangla Number Converter",d:"Change English digits 0-9 into Bangla digits ০-৯ and back.",
h:`<textarea id="i" placeholder="Example: 2026 or ২০২৬"></textarea><div class="row"><label>Direction <select id="m"><option value="a">Auto (both ways)</option><option value="b">English to Bangla</option><option value="e">Bangla to English</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var m=g('m'),e='0123456789',b='০১২৩৪৫৬৭৮৯';return Array.from(s).map(function(c){var i;if(m!=='b'&&(i=e.indexOf(c))>-1)return b[i];if(m!=='e'&&(i=b.indexOf(c))>-1)return e[i];return c}).join('')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type or paste your text.","Choose the direction, or leave it on Auto.","Copy the result."],
faq:[["Does it change letters?","No. Only digits are changed. Everything else stays the same."],["What is auto mode?","It changes English digits to Bangla and Bangla digits to English in the same text."]]});
})(AIO);
