(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("auto-loan-calculator",{cat:"calc",ic:"🚗",t:"Auto Loan Calculator",d:"Work out the monthly payment on a car loan including sales tax, down payment and trade-in.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Vehicle price<input type="number" id="p" value="30000" step="any"></label><label style="flex:1 1 150px">Down payment<input type="number" id="d" value="3000" step="any"></label><label style="flex:1 1 150px">Trade-in value<input type="number" id="tr" value="0" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="7" step="any"></label><label style="flex:1 1 150px">Loan term (months)<select id="m"><option value="36">36 months</option><option value="48">48 months</option><option value="60" selected>60 months</option><option value="72">72 months</option><option value="84">84 months</option></select></label><label style="flex:1 1 150px">Sales tax %<input type="number" id="t" value="6" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "d", "tr", "r", "m", "t"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var L=v.p*(1+v.t/100)-v.d-v.tr;if(L<=0)return 'Nothing to finance.';var r=v.r/1200,pay=r===0?L/v.m:L*r/(1-Math.pow(1+r,-v.m));return 'Amount financed: <b>'+num(Math.round(L))+'</b><br><b style="font-size:20px">Monthly payment: '+num(Math.round(pay*100)/100)+'</b><br>Total of payments: <b>'+num(Math.round(pay*v.m))+'</b><br>Total interest: <b>'+num(Math.round(pay*v.m-L))+'</b><br><small>Estimate only. Fees and extras are not included.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the vehicle price, down payment and trade-in.","Enter the rate, loan term and sales tax.","Read your monthly payment and total interest."],
faq:[["What loan term is best?","A shorter term costs more each month but much less interest overall."],["Is sales tax part of the loan?","Often yes. This tool adds sales tax to the price before subtracting your down payment and trade-in."]]});
})(AIO);
