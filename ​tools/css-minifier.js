(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("css-minifier",{cat:"web",ic:"🎯",t:"CSS Minifier",d:"Shrink CSS code by removing comments and spaces.",
h:`<textarea id="i" placeholder="Paste CSS code"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){return s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').replace(/\s*([{};:,>])\s*/g,'$1').replace(/;}/g,'}').trim()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your CSS.","The minified code appears.","Copy and use it on your site."],
faq:[["Is minified CSS safe?","Yes. Only comments and extra spaces are removed."],["Why minify?","Smaller files load faster."]]});
})(AIO);
