(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("reverse-text",{cat:"text",ic:"🔁",t:"Reverse Text",d:"Flip your text backwards, reverse each word or reverse line order.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Mode <select id="m"><option value="c">Reverse all characters</option><option value="w">Reverse each word</option><option value="l">Reverse line order</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var m=g('m');if(m==='c')return Array.from(s).reverse().join('');if(m==='w')return s.split(/(\s+)/).map(function(w){return Array.from(w).reverse().join('')}).join('');return s.split(/\r?\n/).reverse().join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type or paste your text.","Choose what to reverse.","Copy the result."],
faq:[["What is reverse text used for?","People use it for puzzles, fun social posts and checking palindromes."],["Does it work with emoji?","Mostly yes, though some joined emoji may split."]]});
})(AIO);
