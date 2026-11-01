(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("reading-time-calculator",{cat:"text",ic:"⏱️",t:"Reading Time Calculator",d:"Find out how long your text takes to read and to speak aloud.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var w=(s.trim().match(/\S+/g)||[]).length;function f(m){var t=Math.max(1,Math.round(m*60));return t<60?t+' sec':Math.floor(t/60)+' min '+(t%60)+' sec'}return 'Words: '+w+'\nReading time (230 wpm): '+(w?f(w/230):'0 sec')+'\nSlow reader (150 wpm): '+(w?f(w/150):'0 sec')+'\nSpeaking time (130 wpm): '+(w?f(w/130):'0 sec')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your article or speech.","Read the estimated times.","Use it to plan blog posts, videos or speeches."],
faq:[["What is the average reading speed?","About 200 to 250 words per minute for adults."]]});
})(AIO);
