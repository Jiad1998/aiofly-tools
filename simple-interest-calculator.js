(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("simple-interest-calculator",{cat:"calc",ic:"💰",t:"Simple Interest Calculator",d:"Work out simple interest and the total amount.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Principal<input type="number" id="p" value="100000" step="any"></label><label style="flex:1 1 150px">Rate % per year<input type="number" id="r" value="8" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="t" value="3" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "r", "t"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var i=v.p*v.r*v.t/100;return 'Interest: <b>'+num(i)+'</b><br>Total amount: <b>'+num(v.p+i)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the money amount.","Enter the yearly rate and years.","Read the interest and total."],
faq:[["What is the formula?","Interest = principal x rate x time / 100."],["How is it different from compound interest?","Simple interest is only on the first amount. Compound interest is also on earlier interest."]]});
})(AIO);
