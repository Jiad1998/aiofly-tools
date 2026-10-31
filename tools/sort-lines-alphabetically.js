(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("sort-lines-alphabetically",{cat:"text",ic:"🔤",t:"Sort Lines Alphabetically",d:"Sort a list A to Z, Z to A, by length or in random order.",
h:`<textarea id="i" placeholder="One item per line"></textarea><div class="row"><label>Order <select id="m"><option value="az">A to Z</option><option value="za">Z to A</option><option value="num">Numbers</option><option value="len">By length</option><option value="rnd">Random</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var a=s.split(/\r?\n/).filter(function(x){return x.trim()!==''});var m=g('m');if(m==='az')a.sort(function(x,y){return x.localeCompare(y)});else if(m==='za')a.sort(function(x,y){return y.localeCompare(x)});else if(m==='len')a.sort(function(x,y){return x.length-y.length});else if(m==='num')a.sort(function(x,y){return parseFloat(x)-parseFloat(y)});else a.sort(function(){return rnd(3)-1});return a.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste one item per line.","Pick a sort order.","Copy the sorted list."],
faq:[["Can I sort numbers?","Yes. Choose Numbers so 10 comes after 9 and not after 1."],["Are empty lines removed?","Yes, blank lines are skipped."]]});
})(AIO);
