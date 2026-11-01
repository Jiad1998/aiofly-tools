(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("freelance-rate-calculator",{cat:"business",ic:"💼",t:"Freelance Hourly Rate Calculator",d:"Work out the hourly rate you need to reach your income goal.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Yearly income you want<input type="number" id="i" value="60000" step="any"></label><label style="flex:1 1 150px">Yearly business expenses<input type="number" id="e" value="6000" step="any"></label><label style="flex:1 1 150px">Billable hours per week<input type="number" id="h" value="25" step="any"></label><label style="flex:1 1 150px">Weeks worked per year<input type="number" id="w" value="46" step="any"></label><label style="flex:1 1 150px">Tax rate %<input type="number" id="t" value="20" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["i", "e", "h", "w", "t"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var gross=(v.i+v.e)/(1-v.t/100),hrs=v.h*v.w,r=gross/hrs;return 'Hourly rate needed: <b>'+num(r)+'</b><br>Daily rate (6 hrs): <b>'+num(r*6)+'</b><br>Total billable hours: <b>'+num(hrs)+'</b><br>Total to earn before tax: <b>'+num(gross)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the yearly income you want and your expenses.","Enter billable hours per week, weeks worked and tax rate.","Read your suggested hourly rate."],
faq:[["Why only billable hours?","Freelancers also spend time on emails, sales and admin, so billable hours are lower than total working hours. 20 to 30 per week is common."],["Which currency does it use?","Any. Use the currency you want and the result is in the same currency."]]});
})(AIO);
