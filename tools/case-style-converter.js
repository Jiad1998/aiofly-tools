(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("case-style-converter",{cat:"text",ic:"🐫",t:"Case Style Converter",d:"Convert text to camelCase, snake_case, kebab-case, PascalCase and more.",
h:`<textarea id="i" placeholder="Example: my variable name"></textarea><div class="row"><label>Style <select id="m"><option value="camel">camelCase</option><option value="pascal">PascalCase</option><option value="snake">snake_case</option><option value="kebab">kebab-case</option><option value="const">CONSTANT_CASE</option><option value="dot">dot.case</option><option value="title">Title Case</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var w=s.replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/[_\-.]+/g,' ').trim().split(/\s+/).filter(Boolean).map(function(x){return x.toLowerCase()});var m=g('m');function cap(x){return x.charAt(0).toUpperCase()+x.slice(1)}
if(m==='camel')return w.map(function(x,i){return i?cap(x):x}).join('');if(m==='pascal')return w.map(cap).join('');if(m==='snake')return w.join('_');if(m==='kebab')return w.join('-');if(m==='const')return w.join('_').toUpperCase();if(m==='dot')return w.join('.');return w.map(cap).join(' ')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type or paste your words.","Choose the style.","Copy the result."],
faq:[["What is camelCase?","The first word is lowercase and each next word starts with a capital, like myVariableName."],["When do I use kebab-case?","It is common in URLs and CSS class names, like my-page-title."]]});
})(AIO);
