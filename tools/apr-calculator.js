(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("apr-calculator",{cat:"finance",ic:"🧮",t:"APR Calculator",d:"Find the true yearly cost (APR) of a loan including fees.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Loan amount<input type="number" id="a" value="10000" step="any"></label><label style="flex:1 1 150px">Upfront fees<input type="number" id="f" value="300" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="8" step="any"></label><label style="flex:1 1 150px">Term (years)<input type="number" id="y" value="5" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "f", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var n=v.y*12,i=v.r/1200,p=i?v.a*i/(1-Math.pow(1+i,-n)):v.a/n,net=v.a-v.f;if(net<=0)return 'Fees are too large.';var lo=0,hi=1;for(var k=0;k<200;k++){var m=(lo+hi)/2,pv=m?p*(1-Math.pow(1+m,-n))/m:p*n;if(pv>net)lo=m;else hi=m}return 'Monthly payment: <b>'+num(p)+'</b><br>Total paid: <b>'+num(p*n+v.f)+'</b><br>Total interest + fees: <b>'+num(p*n+v.f-v.a)+'</b><br>APR: <b>'+num(lo*1200)+'%</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the loan amount and fees.","Enter the interest rate and term.","Compare the APR with other loans."],
faq:[["Why is APR higher than the rate?","Because APR also includes fees, so it shows the true yearly cost."]]});
})(AIO);
