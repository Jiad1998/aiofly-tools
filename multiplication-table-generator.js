(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("multiplication-table-generator",{cat:"education",ic:"✖️",t:"Multiplication Table Generator",d:"Make a multiplication table for any number.",
h:`<textarea id="i" placeholder="Type a number, for example 7"></textarea><div class="row"><label>Up to <input type="number" id="m" value="10" min="1" max="100"></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var n=parseFloat(s);if(isNaN(n))return 'Type a number.';var m=Math.min(Math.max(parseInt(g('m'),10)||10,1),100),o=[];for(var i=1;i<=m;i++)o.push(n+' x '+i+' = '+parseFloat((n*i).toFixed(10)));return o.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a number.","Choose how far the table goes.","Copy it or use it for study."],
faq:[["Can I use decimals?","Yes. For example 2.5."],["How far can the table go?","Up to 100 rows."]]});
})(AIO);
