(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("step-up-sip-calculator",{cat:"finance",ic:"📈",t:"Step-up SIP Calculator",d:"See how much your SIP can grow if you increase the monthly amount every year.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Starting monthly SIP<input type="number" id="m" value="10000" step="any"></label><label style="flex:1 1 150px">Yearly increase %<input type="number" id="s" value="10" step="any"></label><label style="flex:1 1 150px">Expected return % per year<input type="number" id="r" value="12" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="15" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["m", "s", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var b=0,inv=0,mm=v.m,r=v.r/1200;for(var yr=0;yr<v.y;yr++){for(var k=0;k<12;k++){b=(b+mm)*(1+r);inv+=mm}mm*=1+v.s/100}return 'Total invested: <b>'+num(inv)+'</b><br>Estimated returns: <b>'+num(b-inv)+'</b><br>Future value: <b>'+num(b)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your starting monthly SIP.","Enter how much you will raise it every year.","Enter expected return and years."],
faq:[["What is a step-up SIP?","A SIP whose monthly amount rises each year, usually with your salary. It builds a bigger corpus than a flat SIP."],["Are returns guaranteed?","No. The result is only an estimate. Market returns change."]]});
})(AIO);
