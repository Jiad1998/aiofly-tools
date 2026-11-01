(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("html-beautifier",{cat:"dev",ic:"🧹",t:"HTML Beautifier",d:"Add clean indentation to messy HTML code.",
h:`<textarea id="i" placeholder="<div><p>Hello</p><ul><li>One</li></ul></div>"></textarea><label>Indent spaces</label><select id="n"><option>2</option><option>4</option></select><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var v={area:1,base:1,br:1,col:1,embed:1,hr:1,img:1,input:1,link:1,meta:1,source:1,track:1,wbr:1};var ind=new Array((parseInt(g('n'))||2)+1).join(' ');var parts=s.replace(/>\s+</g,'><').split(/(<[^>]+>)/).filter(function(x){return x.trim()});var d=0,o=[];
parts.forEach(function(p){p=p.trim();var m=p.match(/^<\/?([a-zA-Z0-9-]+)/);if(!m||p[1]==='!'){o.push(new Array(d+1).join(ind)+p);return}var nm=m[1].toLowerCase();
if(p[1]==='/'){d=Math.max(0,d-1);o.push(new Array(d+1).join(ind)+p)}else if(v[nm]||/\/>$/.test(p)){o.push(new Array(d+1).join(ind)+p)}else{o.push(new Array(d+1).join(ind)+p);d++}});
return o.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your HTML.","Choose indent size.","Copy the neat code."],
faq:[["Does it fix broken HTML?","No. It only changes spacing and line breaks."],["Is script and style code formatted?","They are kept as they are."]]});
})(AIO);
