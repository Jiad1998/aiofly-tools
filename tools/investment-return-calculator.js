(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("investment-return-calculator",{cat:"calc",ic:"📈",t:"Investment Calculator",d:"See how an investment can grow with regular monthly additions.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Starting amount<input type="number" id="p" value="10000" step="any"></label><label style="flex:1 1 150px">Monthly contribution<input type="number" id="c" value="500" step="any"></label><label style="flex:1 1 150px">Expected return % per year<input type="number" id="r" value="7" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="20" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "c", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var i=v.r/1200,n=v.y*12,g=i===0?v.c*n:v.c*((Math.pow(1+i,n)-1)/i),fv=v.p*Math.pow(1+i,n)+g,inv=v.p+v.c*n;return 'Total you put in: <b>'+num(Math.round(inv))+'</b><br>Growth: <b>'+num(Math.round(fv-inv))+'</b><br><b style="font-size:20px">Final value: '+num(Math.round(fv))+'</b><br><small>Returns are not guaranteed and real markets go up and down. Not financial advice.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your starting amount and monthly contribution.","Enter the return you expect and the number of years.","Read the final value and how much came from growth."],
faq:[["What return should I use?","Long-term stock market averages are often quoted near 7 percent after inflation, but nobody can promise a return."],["Why does time matter so much?","Growth earns more growth. Starting early often matters more than the amount."]]});
})(AIO);
