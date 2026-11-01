(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("fd-calculator",{cat:"calc",ic:"🏦",t:"FD Calculator",d:"Calculate the maturity amount of a fixed deposit.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Deposit amount<input type="number" id="p" value="100000" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="7" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="5" step="any"></label><label style="flex:1 1 150px">Compounding<select id="n"><option value="1">Yearly</option><option value="2">Half-yearly</option><option value="4" selected>Quarterly</option><option value="12">Monthly</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "r", "y", "n"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var a=v.p*Math.pow(1+v.r/100/v.n,v.n*v.y);return 'Maturity amount: <b style="font-size:20px">'+num(Math.round(a))+'</b><br>Interest earned: <b>'+num(Math.round(a-v.p))+'</b>'+'<br><small>Tax on interest is not included.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the deposit and the interest rate.","Choose the years and how often interest is added.","Read the maturity amount."],
faq:[["How do banks add FD interest?","Most Indian banks compound FD interest quarterly."],["Is TDS deducted?","Banks may deduct tax at source on interest above a limit. This tool does not include it."]]});
})(AIO);
