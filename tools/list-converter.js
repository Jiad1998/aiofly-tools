(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("list-converter",{cat:"text",ic:"📋",t:"List Converter",d:"Change a list between lines and comma-separated text.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Direction <select id="m"><option value="c">Lines to comma list</option><option value="l">Comma list to lines</option></select></label><label>Joiner <select id="sp"><option value=" ">Comma and space</option><option value=",">Comma only</option><option value=" | ">Bar</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var m=g('m');if(m==='c')return s.split(/\r?\n/).map(function(x){return x.trim()}).filter(Boolean).join(g('sp')===' '?', ':g('sp'));return s.split(/[,;\n]+/).map(function(x){return x.trim()}).filter(Boolean).join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your list or comma-separated text.","Choose the direction.","Copy the result."],
faq:[["Can it add quotes?","No. It only joins or splits. Use the Find and Replace tool to add quotes."],["Which separators are split?","Commas, semicolons and new lines."]]});
})(AIO);
