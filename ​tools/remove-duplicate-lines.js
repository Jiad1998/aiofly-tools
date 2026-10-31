(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("remove-duplicate-lines",{cat:"text",ic:"🧹",t:"Remove Duplicate Lines",d:"Delete repeated lines from a list and keep each line once.",
h:`<textarea id="i" placeholder="One item per line"></textarea><div class="row"><label><input type="checkbox" id="c"> Case sensitive</label><label><input type="checkbox" id="t" checked> Trim spaces</label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var seen={},o=[];s.split(/\r?\n/).forEach(function(l){var k=g('c')?l:l.toLowerCase();k=g('t')?k.trim():k;if(!seen[k]){seen[k]=1;o.push(l)}});return o.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your list, one item per line.","Choose whether upper and lower case should count as different.","Copy the cleaned list."],
faq:[["Does it keep the original order?","Yes. The first copy of each line stays in its place."],["Can I clean email lists?","Yes. Paste one email per line and tick trim spaces."]]});
})(AIO);
