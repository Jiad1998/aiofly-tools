(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("hra-calculator",{cat:"calc",ic:"🏘️",t:"HRA Exemption Calculator",d:"Find how much of your house rent allowance is tax exempt.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Basic salary + DA per month<input type="number" id="b" value="40000" step="any"></label><label style="flex:1 1 150px">HRA received per month<input type="number" id="h" value="16000" step="any"></label><label style="flex:1 1 150px">Rent paid per month<input type="number" id="r" value="15000" step="any"></label><label style="flex:1 1 150px">City<select id="m"><option value="0.5" selected>Metro (Delhi, Mumbai, Kolkata, Chennai)</option><option value="0.4">Other city</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["b", "h", "r", "m"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var a=v.h,b=Math.max(0,v.r-0.1*v.b),c=v.m*v.b,ex=Math.min(a,b,c);return 'HRA received: <b>'+num(a)+'</b><br>Rent minus 10% of salary: <b>'+num(Math.round(b))+'</b><br>'+(v.m*100)+'% of salary: <b>'+num(Math.round(c))+'</b><br><b style="font-size:20px">Exempt HRA: '+num(Math.round(ex))+' per month</b> ('+num(Math.round(ex*12))+' per year)<br>Taxable HRA: <b>'+num(Math.round((v.h-ex)*12))+'</b> per year<br><small>Applies to the old tax regime. Check current rules.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your basic salary with DA and your HRA.","Enter the rent you pay and choose the city type.","Read the exempt HRA per month and per year."],
faq:[["How is HRA exemption decided?","It is the lowest of three: actual HRA, rent paid minus 10 percent of salary, and 50 or 40 percent of salary."],["Do I need rent receipts?","Yes. You may need them and the landlord PAN for higher rent."]]});
})(AIO);
