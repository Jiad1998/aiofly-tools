(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("rd-calculator",{cat:"calc",ic:"🪙",t:"RD Calculator",d:"Calculate the maturity amount of a recurring deposit.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Monthly deposit<input type="number" id="d" value="5000" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="6.5" step="any"></label><label style="flex:1 1 150px">Months<input type="number" id="m" value="60" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["d", "r", "m"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var i=v.r/400,n=v.m/3,a;if(i===0)a=v.d*v.m;else a=v.d*(Math.pow(1+i,n)-1)/(1-Math.pow(1+i,-1/3));var inv=v.d*v.m;return 'Total deposited: <b>'+num(inv)+'</b><br>Maturity amount: <b style="font-size:20px">'+num(Math.round(a))+'</b><br>Interest earned: <b>'+num(Math.round(a-inv))+'</b><br><small>Uses quarterly compounding, as many banks do.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your monthly deposit.","Enter the rate and the number of months.","Read the maturity amount."],
faq:[["What is an RD?","A recurring deposit lets you save a fixed amount each month for a set time and earn interest."],["Is the result exact?","It follows the common bank formula. Your bank may differ by a small amount."]]});
})(AIO);
