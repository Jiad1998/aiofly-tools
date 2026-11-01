(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("username-generator",{cat:"social",ic:"👤",t:"Username Generator",d:"Create username ideas from your name or favourite words.",
h:`<textarea id="i" placeholder="Example: Rafi Ahmed"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var w=s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(Boolean);if(!w.length)return 'Type your name or some words.';var a=w.join(''),b=w.join('_'),c=w.join('.'),p=['real','the','official','its','hey','mr','ms','just'],q=['bd','pro','official','xyz','_','hub','zone','world','daily'],o=[a,b,c,w[0]+'_'+(w[1]||'official')];for(var i=0;i<12;i++){var x=rnd(4),n=10+rnd(990);if(x===0)o.push(p[rnd(p.length)]+a);else if(x===1)o.push(a+q[rnd(q.length)]);else if(x===2)o.push(a+n);else o.push(w[0]+(w[w.length-1]||'')+n)}return o.filter(function(v,i,r){return r.indexOf(v)===i&&v.length<=30}).slice(0,16).join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type your name or a few words you like.","Read the list of ideas. Reload the tool for a new list.","Copy the one you like."],
faq:[["Is the username free?","Check the app. These are only ideas."],["How long can a username be?","Many apps allow up to 30 characters."]]});
})(AIO);
