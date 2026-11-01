(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("scientific-notation-converter",{cat:"education",ic:"🔬",t:"Scientific Notation Converter",d:"Convert numbers to scientific notation and back.",
h:`<textarea id="i" placeholder="Example: 123400 or 1.234e5"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){s=s.trim().replace(/,/g,'');if(!s)return '';var m=s.match(/^(-?\d*\.?\d+)\s*(?:[eE]|x\s*10\^?)\s*([+-]?\d+)$/);if(m){var v=parseFloat(m[1])*Math.pow(10,parseInt(m[2],10));return 'Decimal: '+(Math.abs(v)<1e21&&Math.abs(v)>=1e-6?String(parseFloat(v.toPrecision(15))):v.toExponential())}var n=Number(s);if(isNaN(n))return 'Type a number like 123400 or 1.234e5.';if(n===0)return '0 = 0 x 10^0';var e=Math.floor(Math.log10(Math.abs(n))),c=n/Math.pow(10,e);return 'Scientific: '+parseFloat(c.toPrecision(12))+' x 10^'+e+'\nE notation: '+n.toExponential()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a number, or a value like 1.5e3.","The converted form appears.","Copy it."],
faq:[["What is scientific notation?","It writes a number as a value between 1 and 10 times a power of 10, like 1.234 x 10^5."],["What is E notation?","E notation writes the same thing as 1.234e5."]]});
})(AIO);
