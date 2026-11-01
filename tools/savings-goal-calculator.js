(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("savings-goal-calculator",{cat:"calc",ic:"🎯",t:"Savings Goal Calculator",d:"Find how many months it takes to reach a savings goal.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Goal amount<input type="number" id="g" value="20000" step="any"></label><label style="flex:1 1 150px">Already saved<input type="number" id="c" value="1000" step="any"></label><label style="flex:1 1 150px">Monthly saving<input type="number" id="m" value="400" step="any"></label><label style="flex:1 1 150px">Interest % per year<input type="number" id="r" value="4" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["g", "c", "m", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.m<=0&&v.c<v.g)return 'Enter a monthly saving above 0.';var i=v.r/1200,b=v.c,n=0;while(b<v.g&&n<1200){b=b*(1+i)+v.m;n++}return n>=1200?'This goal needs more than 100 years at this saving rate.':'Time needed: <b>'+Math.floor(n/12)+' years '+(n%12)+' months</b> ('+n+' months)<br>Total you save: <b>'+num(Math.round(v.c+v.m*n))+'</b><br>Interest earned: <b>'+num(Math.round(b-v.c-v.m*n))+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the amount you want to reach.","Enter what you have saved and your monthly saving.","See how long it will take."],
faq:[["Does interest help?","Yes, but regular saving matters more at small amounts."],["What if I save more?","Try a bigger monthly amount to see the time drop."]]});
})(AIO);
