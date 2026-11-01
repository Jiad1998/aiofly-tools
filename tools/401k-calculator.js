(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("401k-calculator",{cat:"finance",ic:"🇺🇸",t:"401(k) Calculator",d:"Estimate your 401(k) balance at retirement with employer match.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Current age<input type="number" id="a" value="30" step="any"></label><label style="flex:1 1 150px">Retirement age<input type="number" id="ra" value="65" step="any"></label><label style="flex:1 1 150px">Current balance<input type="number" id="b" value="20000" step="any"></label><label style="flex:1 1 150px">Annual salary<input type="number" id="s" value="60000" step="any"></label><label style="flex:1 1 150px">Your contribution %<input type="number" id="c" value="6" step="any"></label><label style="flex:1 1 150px">Employer match % of salary<input type="number" id="m" value="3" step="any"></label><label style="flex:1 1 150px">Yearly salary growth %<input type="number" id="g" value="3" step="any"></label><label style="flex:1 1 150px">Expected return %<input type="number" id="r" value="7" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "ra", "b", "s", "c", "m", "g", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var yrs=v.ra-v.a;if(yrs<=0)return 'Retirement age must be higher than your age.';var bal=v.b,sal=v.s,tot=v.b;for(var i=0;i<yrs;i++){var c=sal*(v.c+v.m)/100;bal=bal*(1+v.r/100)+c*(1+v.r/200);tot+=c;sal*=1+v.g/100}return 'Years to retirement: <b>'+yrs+'</b><br>Estimated balance: <b>'+num(bal)+'</b><br>Total contributed: <b>'+num(tot)+'</b><br><small>Estimate only. Real returns vary.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your age and planned retirement age.","Enter salary, contribution and employer match.","Read your projected balance."],
faq:[["What is an employer match?","Money your employer adds when you contribute. 3% is a common example."],["Does it include inflation?","No. The result is in future dollars."]]});
})(AIO);
