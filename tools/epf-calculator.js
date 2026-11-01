(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("epf-calculator",{cat:"finance",ic:"🏦",t:"EPF Calculator",d:"Estimate your Provident Fund (EPF) balance at retirement.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Monthly basic salary + DA<input type="number" id="b" value="30000" step="any"></label><label style="flex:1 1 150px">Your contribution % <input type="number" id="e" value="12" step="any"></label><label style="flex:1 1 150px">Employer contribution % to EPF<input type="number" id="c" value="3.67" step="any"></label><label style="flex:1 1 150px">Yearly salary increase %<input type="number" id="g" value="6" step="any"></label><label style="flex:1 1 150px">EPF interest rate %<input type="number" id="i" value="8.25" step="any"></label><label style="flex:1 1 150px">Years to work<input type="number" id="y" value="20" step="any"></label><label style="flex:1 1 150px">Current EPF balance<input type="number" id="ob" value="0" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["b", "e", "c", "g", "i", "y", "ob"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var bal=v.ob,sal=v.b*1,tot=0;for(var yr=0;yr<v.y;yr++){var c=sal*(v.e+v.c)/100*12;tot+=c;bal=bal*(1+v.i/100)+c*(1+v.i/200);sal*=1+v.g/100}return 'Estimated EPF balance: <b>'+num(bal)+'</b><br>Total contributions: <b>'+num(tot+v.ob)+'</b><br><small>Rough estimate. Check the official EPFO rules and current rate.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your basic salary and the contribution percentages.","Enter salary growth, interest rate and years.","Read the estimated balance."],
faq:[["What is the default employer share?","Usually 3.67% goes to EPF and 8.33% to the pension scheme (EPS). Check your payslip."],["Is the interest rate fixed?","No. The government announces it every year. 8.25% is an example."]]});
})(AIO);
