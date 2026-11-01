(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("lumpsum-calculator",{cat:"finance",ic:"💵",t:"Lumpsum Investment Calculator",d:"Find the future value of a one-time investment.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount invested<input type="number" id="p" value="100000" step="any"></label><label style="flex:1 1 150px">Expected return % per year<input type="number" id="r" value="12" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="10" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var f=v.p*Math.pow(1+v.r/100,v.y);return 'Invested: <b>'+num(v.p)+'</b><br>Estimated returns: <b>'+num(f-v.p)+'</b><br>Future value: <b>'+num(f)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the amount.","Enter the yearly return and number of years.","See the future value."],
faq:[["Is it compounded yearly?","Yes, the return is compounded once every year."]]});
})(AIO);
