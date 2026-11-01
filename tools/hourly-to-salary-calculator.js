(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("hourly-to-salary-calculator",{cat:"finance",ic:"⏳",t:"Hourly to Salary Calculator",d:"Convert an hourly wage to daily, weekly, monthly and yearly pay.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Hourly rate<input type="number" id="h" value="20" step="any"></label><label style="flex:1 1 150px">Hours per week<input type="number" id="w" value="40" step="any"></label><label style="flex:1 1 150px">Weeks per year<input type="number" id="k" value="52" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["h", "w", "k"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var y=v.h*v.w*v.k;return 'Daily (8h): <b>'+num(v.h*8)+'</b><br>Weekly: <b>'+num(v.h*v.w)+'</b><br>Monthly: <b>'+num(y/12)+'</b><br>Yearly: <b>'+num(y)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your hourly rate.","Enter hours per week and weeks per year.","See your pay for each period."],
faq:[["What if I take unpaid leave?","Reduce the weeks per year, for example to 50."]]});
})(AIO);
