(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-to-slug-generator",{cat:"seo",ic:"🧷",t:"Slug Generator",d:"Turn a title into a clean, search-friendly URL slug.",
h:`<textarea id="i" placeholder="Type your page title"></textarea><div class="row"><label>Max length <input type="number" id="m" value="0" min="0"></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var r=s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');var m=parseInt(g('m'),10);if(m&&r.length>m)r=r.slice(0,m).replace(/-+$/,'');return r})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type or paste the title.","Set a maximum length if you want one.","Copy the slug for your link."],
faq:[["What is a slug?","It is the last part of a page address, like how-to-resize-photos."],["Why keep slugs short?","Short, clear slugs are easier to read and share."]]});
})(AIO);
