(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("ppf-calculator",{cat:"calc",ic:"🛡️",t:"PPF Calculator",d:"Estimate the maturity value of your Public Provident Fund savings.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Yearly deposit<input type="number" id="d" value="150000" step="any"></label><label style="flex:1 1 150px">Interest rate % per year<input type="number" id="r" value="7.1" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="15" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["d", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var r=v.r/100,fv=r===0?v.d*v.y:v.d*((Math.pow(1+r,v.y)-1)/r)*(1+r),inv=v.d*v.y;return 'Total invested: <b>'+num(inv)+'</b><br>Maturity value: <b style="font-size:20px">'+num(Math.round(fv))+'</b><br>Interest earned: <b>'+num(Math.round(fv-inv))+'</b><br><small>PPF has a yearly deposit limit and a minimum 15-year term. The rate is set by the government and can change. Deposits are assumed at the start of each year.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your yearly deposit.","Enter the PPF rate and the years.","Read the maturity value."],
faq:[["What is the PPF lock-in?","The account runs for 15 years, with options to extend."],["Is PPF interest taxable?","PPF is known as a tax-friendly scheme in India. Please check the current rules."]]});
})(AIO);
