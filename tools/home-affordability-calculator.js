(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("home-affordability-calculator",{cat:"finance",ic:"🏡",t:"Home Affordability Calculator",d:"Find out roughly how much home you can afford based on income and debts.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Yearly income (before tax)<input type="number" id="i" value="80000" step="any"></label><label style="flex:1 1 150px">Monthly debt payments<input type="number" id="d" value="400" step="any"></label><label style="flex:1 1 150px">Down payment saved<input type="number" id="dp" value="40000" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="6.5" step="any"></label><label style="flex:1 1 150px">Loan term (years)<input type="number" id="y" value="30" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["i", "d", "dp", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var mi=v.i/12,pay=Math.max(0,Math.min(mi*0.28,mi*0.36-v.d)),n=v.y*12,i=v.r/1200,l=i?pay*(1-Math.pow(1+i,-n))/i:pay*n;return 'Max monthly housing payment: <b>'+num(pay)+'</b><br>Loan you may qualify for: <b>'+num(l)+'</b><br>Estimated home price: <b>'+num(l+v.dp)+'</b><br><small>Uses the 28/36 rule. Banks may differ.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter income, monthly debts and savings.","Enter the interest rate and term.","See the estimated price range."],
faq:[["What is the 28/36 rule?","Housing should be at most 28% of gross monthly income, and all debts at most 36%."]]});
})(AIO);
