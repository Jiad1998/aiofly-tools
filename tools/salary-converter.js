(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("salary-converter",{cat:"business",ic:"💼",t:"Salary Converter",d:"Convert hourly, daily, weekly, monthly and yearly pay.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount<input type="number" id="a" value="50000" step="any"></label><label style="flex:1 1 150px">Hours per week<input type="number" id="h" value="40" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "h"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var y=v.a*12,w=y/52,hr=w/v.h;return 'If this is your <b>monthly</b> pay:<br>Yearly: <b>'+num(y)+'</b><br>Weekly: <b>'+num(w)+'</b><br>Hourly: <b>'+num(hr)+'</b><hr>If this is your <b>hourly</b> pay:<br>Monthly: <b>'+num(v.a*v.h*52/12)+'</b><br>Yearly: <b>'+num(v.a*v.h*52)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter an amount.","Enter hours worked per week.","Read both views: from monthly and from hourly."],
faq:[["How many weeks are in a year?","There are 52 weeks, so a 40-hour week gives 2,080 working hours."],["Is this before or after tax?","It does the math only. Use your own figure before or after tax."]]});
})(AIO);
