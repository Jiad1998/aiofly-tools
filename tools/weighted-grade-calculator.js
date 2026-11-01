(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("weighted-grade-calculator",{cat:"education",ic:"🎯",t:"Weighted Grade Calculator",d:"Find your final grade when each assignment or exam has a different weight.",
h:`<textarea id="i" placeholder="85, 30
90, 20
78, 50"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var L=s.split('\n').map(function(l){return l.match(/-?\d*\.?\d+/g)}).filter(function(a){return a&&a.length>=2}).map(function(a){return [+a[0],+a[1]]});if(!L.length)return 'Type one line per item: score, weight  (example: 85, 30)';
var w=L.reduce(function(x,a){return x+a[1]},0),sc=L.reduce(function(x,a){return x+a[0]*a[1]},0);return 'Items: '+L.length+'\nTotal weight: '+w+'%\nWeighted grade: '+(sc/w).toFixed(2)+'%'+(w!==100?'\n(Note: your weights add up to '+w+', not 100.)':'')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type one item per line as: score, weight.","Example: 85, 30 means 85 marks with 30% weight.","Read your weighted grade."],
faq:[["Do weights need to add up to 100?","Ideally yes. If not, the tool still gives the weighted average of what you entered."]]});
})(AIO);
