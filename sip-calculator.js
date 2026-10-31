(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("sip-calculator",{cat:"calc",ic:"📈",t:"SIP Calculator",d:"See how a monthly investment can grow over time.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Monthly investment<input type="number" id="p" value="5000" step="any"></label><label style="flex:1 1 150px">Expected return % per year<input type="number" id="r" value="12" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="10" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var i=v.r/1200,n=v.y*12,fv=i===0?v.p*n:v.p*((Math.pow(1+i,n)-1)/i)*(1+i),inv=v.p*n;return 'Total invested: <b>'+num(Math.round(inv))+'</b><br>Estimated gain: <b>'+num(Math.round(fv-inv))+'</b><br>Future value: <b>'+num(Math.round(fv))+'</b><br><small>Returns are not guaranteed. This is an example only.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your monthly amount.","Enter the yearly return you expect and the years.","Read the future value."],
faq:[["What is a SIP?","A systematic investment plan puts the same amount into an investment every month."],["Is the return guaranteed?","No. Real returns go up and down. Use this tool only to plan."]]});
})(AIO);
