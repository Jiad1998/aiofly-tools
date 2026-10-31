(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("cgpa-calculator",{cat:"calc",ic:"🎓",t:"CGPA Calculator",d:"Calculate your CGPA from grade points and credits. Works with a 4.0 or 5.0 scale.",
h:`<textarea id="i" placeholder="4.5 3
4.0 3
3.5 4"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var t=0,c=0,n=0;s.split('\n').forEach(function(l){var m=l.trim().match(/^(\d+(?:\.\d+)?)(?:[\s,]+(\d+(?:\.\d+)?))?$/);if(m){var g=+m[1],cr=m[2]===undefined?1:+m[2];t+=g*cr;c+=cr;n++}});if(!c)return 'Type one subject per line: grade point and credit, like 4.5 3';return 'Subjects: '+n+'\nTotal credits: '+c+'\nCGPA: '+(t/c).toFixed(2)})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type one subject per line: the grade point, a space, then the credit (for example 4.5 3).","If you leave out the credit, it counts as 1.","Read your CGPA below."],
faq:[["How is CGPA calculated?","Multiply each grade point by its credit, add them all, then divide by the total credits."],["Does it work for GPA 5.0?","Yes. It works for any scale. Just type your own grade points."]]});
})(AIO);
