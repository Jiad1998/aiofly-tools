(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("tip-calculator",{cat:"calc",ic:"🍽️",t:"Tip Calculator",d:"Split a bill and work out the tip per person.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Bill<input type="number" id="b" value="2000" step="any"></label><label style="flex:1 1 150px">Tip %<input type="number" id="t" value="10" step="any"></label><label style="flex:1 1 150px">People<input type="number" id="n" value="2" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["b", "t", "n"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var tip=v.b*v.t/100,tot=v.b+tip;return 'Tip: <b>'+num(tip)+'</b><br>Total: <b>'+num(tot)+'</b><br>Each person pays: <b>'+num(tot/Math.max(v.n,1))+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the bill.","Enter the tip percent and number of people.","See what each person pays."],
faq:[["How much should I tip?","Customs differ. 10 percent is common in many places."],["Does it work for any currency?","Yes. It only does the math."]]});
})(AIO);
