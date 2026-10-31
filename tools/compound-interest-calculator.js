(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("compound-interest-calculator",{cat:"calc",ic:"📈",t:"Compound Interest Calculator",d:"See how savings grow when interest earns interest.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Principal<input type="number" id="p" value="100000" step="any"></label><label style="flex:1 1 150px">Rate % per year<input type="number" id="r" value="8" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="t" value="5" step="any"></label><label style="flex:1 1 150px">Times per year<input type="number" id="n" value="12" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "r", "t", "n"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var a=v.p*Math.pow(1+v.r/100/v.n,v.n*v.t);return 'Final amount: <b>'+num(a)+'</b><br>Interest earned: <b>'+num(a-v.p)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the starting amount.","Enter the yearly rate, years and how many times per year interest is added.","Check the final amount."],
faq:[["What does times per year mean?","12 means monthly, 4 means every three months, 1 means yearly."],["Why does compounding help?","Each period interest is added to the balance, so the next interest is bigger."]]});
})(AIO);
