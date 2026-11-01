(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("json-to-yaml-converter",{cat:"dev",ic:"🔀",t:"JSON to YAML Converter",d:"Convert JSON data to YAML format instantly.",
h:`<textarea id="i" placeholder="{"name":"AioFly","tools":["qr","pdf"],"free":true}"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var o=JSON.parse(s);function sc(x){if(x===null)return 'null';if(typeof x==='string')return /^[\w .\/@-]+$/.test(x)&&!/^(true|false|null|yes|no|[\d.]+)$/i.test(x)&&x.trim()===x&&x!==''?x:JSON.stringify(x);return String(x)}
function y(x,l){var p=new Array(l+1).join('  ');if(Array.isArray(x)){if(!x.length)return p+'[]\n';return x.map(function(i){if(i&&typeof i==='object'){var r=y(i,l+1).replace(/^\s+/,'');return p+'- '+r}return p+'- '+sc(i)+'\n'}).join('')}
if(x&&typeof x==='object'){var k=Object.keys(x);if(!k.length)return p+'{}\n';return k.map(function(a){var v=x[a];if(v&&typeof v==='object'&&(Array.isArray(v)?v.length:Object.keys(v).length)){return p+a+':\n'+y(v,l+1)}if(v&&typeof v==='object')return p+a+': '+(Array.isArray(v)?'[]':'{}')+'\n';return p+a+': '+sc(v)+'\n'}).join('')}return p+sc(x)+'\n'}
return y(o,0).trimEnd()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste valid JSON.","The YAML is made automatically.","Press <b>Copy result</b>."],
faq:[["What if my JSON is invalid?","You will see an error message. Fix the JSON and try again."],["What is YAML used for?","YAML is a human-friendly format for config files such as Docker, Kubernetes and GitHub Actions."]]});
})(AIO);
