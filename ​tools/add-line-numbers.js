(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("add-line-numbers",{cat:"text",ic:"🔢",t:"Add Line Numbers",d:"Put a number in front of every line of your text.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Start <input type="number" id="n" value="1"></label><label>After number <select id="sp"><option value=". ">. (dot)</option><option value=") ">)</option><option value=": ">:</option><option value=" - "> -</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var st=parseInt(g('n'),10);if(isNaN(st))st=1;var sep=g('sp');return s.split(/\r?\n/).map(function(l,i){return (st+i)+sep+l}).join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your text.","Set the start number and the separator.","Copy the numbered text."],
faq:[["Can I start from 0?","Yes. Type 0 in the start box."],["Does it number empty lines?","Yes, each line gets a number."]]});
})(AIO);
