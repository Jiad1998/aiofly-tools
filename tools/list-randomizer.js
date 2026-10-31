(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("list-randomizer",{cat:"text",ic:"🔀",t:"List Randomizer (Shuffle)",d:"Shuffle the lines of any list in random order.",
h:`<textarea id="i" placeholder="One item per line"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var a=s.split(/\r?\n/).filter(function(x){return x.trim()!==''});for(var i=a.length-1;i>0;i--){var j=rnd(i+1),t=a[i];a[i]=a[j];a[j]=t}return a.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your list, one item per line.","The shuffled list appears. Change a letter to shuffle again.","Copy the result."],
faq:[["Is it really random?","Yes. It uses a secure random generator and the Fisher-Yates method."],["How do I shuffle again?","Type a space at the end of the list or press Copy after editing."]]});
})(AIO);
