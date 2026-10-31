(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("remove-extra-spaces",{cat:"text",ic:"🧽",t:"Remove Extra Spaces",d:"Clean double spaces, tabs and empty lines from your text.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label><input type="checkbox" id="a" checked> Extra spaces</label><label><input type="checkbox" id="b" checked> Trim each line</label><label><input type="checkbox" id="c" checked> Empty lines</label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var r=s;if(g('a'))r=r.replace(/[ \t]+/g,' ');if(g('b'))r=r.split(/\r?\n/).map(function(l){return l.trim()}).join('\n');if(g('c'))r=r.replace(/\n{2,}/g,'\n');return r.trim()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your messy text.","Choose which clean-ups to apply.","Copy the clean text."],
faq:[["Why do I get double spaces?","They often come from copying out of PDFs or typing a space after a space."],["Will it change my words?","No. Only spaces and blank lines are changed."]]});
})(AIO);
