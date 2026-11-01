(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("down-payment-calculator",{cat:"finance",ic:"🏠",t:"Down Payment Calculator",d:"See your down payment, loan amount and monthly payment for a home or car.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Price<input type="number" id="p" value="350000" step="any"></label><label style="flex:1 1 150px">Down payment %<input type="number" id="d" value="20" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="6.5" step="any"></label><label style="flex:1 1 150px">Loan term (years)<input type="number" id="y" value="30" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "d", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var dp=v.p*v.d/100,l=v.p-dp,n=v.y*12,i=v.r/1200,m=i?l*i/(1-Math.pow(1+i,-n)):l/n;return 'Down payment: <b>'+num(dp)+'</b><br>Loan amount: <b>'+num(l)+'</b><br>Monthly payment: <b>'+num(m)+'</b><br>Total interest: <b>'+num(m*n-l)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the price and the down payment percentage.","Enter interest rate and years.","See the loan and monthly payment."],
faq:[["Does it include taxes and insurance?","No. Add property tax and insurance yourself for the full monthly cost."]]});
})(AIO);
