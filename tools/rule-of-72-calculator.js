(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("rule-of-72-calculator",{cat:"calc",ic:"2️⃣",t:"Rule of 72 Calculator",d:"Estimate how many years it takes for money to double.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Annual return %<input type="number" id="r" value="8" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.r<=0)return 'Enter a rate above 0.';return 'Rule of 72: about <b>'+num(Math.round(72/v.r*10)/10)+' years</b> to double<br>Exact: <b>'+num(Math.round(Math.log(2)/Math.log(1+v.r/100)*10)/10)+' years</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the yearly return.","Read the quick estimate and the exact time.","Try different rates to compare."],
faq:[["How does the rule work?","Divide 72 by the yearly rate to get the years to double."],["Is it exact?","It is a quick shortcut that works best for rates between 6 and 10 percent."]]});
})(AIO);
