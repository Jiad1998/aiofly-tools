(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("fibonacci-sequence-generator",{cat:"education",ic:"🌀",t:"Fibonacci Sequence Generator",d:"Generate the first terms of the Fibonacci sequence.",
h:`<textarea id="i" placeholder="How many terms? e.g. 10"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var n=Math.min(Math.max(parseInt(s,10)||0,1),90),a=[0,1];while(a.length<n)a.push(a[a.length-1]+a[a.length-2]);return a.slice(0,n).join(', ')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type how many terms you want (up to 90).","The sequence appears.","Copy it."],
faq:[["How does the sequence work?","Each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8..."],["Why only 90 terms?","Numbers beyond this are too large to show exactly in a browser."]]});
})(AIO);
