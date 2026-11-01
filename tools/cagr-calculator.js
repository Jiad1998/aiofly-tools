(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("cagr-calculator",{cat:"calc",ic:"📊",t:"CAGR Calculator",d:"Find the compound annual growth rate of an investment.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Starting value<input type="number" id="s" value="10000" step="any"></label><label style="flex:1 1 150px">Ending value<input type="number" id="e" value="18000" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="5" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["s", "e", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.s<=0||v.e<=0||v.y<=0)return 'Use positive numbers.';var c=(Math.pow(v.e/v.s,1/v.y)-1)*100;return 'CAGR: <b style="font-size:20px">'+num(Math.round(c*100)/100)+'% per year</b><br>Total growth: <b>'+num(Math.round((v.e/v.s-1)*10000)/100)+'%</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the starting and ending values.","Enter the number of years.","Read the yearly growth rate."],
faq:[["What is CAGR?","It is the steady yearly rate that would take your starting value to the ending value."],["Is CAGR the same as average return?","No. CAGR smooths ups and downs into one steady rate."]]});
})(AIO);
