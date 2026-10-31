(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("leap-year-checker",{cat:"education",ic:"📅",t:"Leap Year Checker",d:"Check if a year is a leap year.",
h:`<textarea id="i" placeholder="Type a year, for example 2028"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var y=parseInt(s,10);if(isNaN(y)||y<1)return 'Type a year, for example 2028.';var l=(y%4===0&&y%100!==0)||y%400===0;return y+(l?' is a leap year. February has 29 days.':' is not a leap year. February has 28 days.')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a year.","Read the answer.","Use it for date and age math."],
faq:[["What is the leap year rule?","A year is a leap year if it divides by 4, except century years, which must divide by 400."],["Is 2100 a leap year?","No. 2100 is a century year that does not divide by 400."]]});
})(AIO);
