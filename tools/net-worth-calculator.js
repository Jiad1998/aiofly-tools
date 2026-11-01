(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("net-worth-calculator",{cat:"finance",ic:"⚖️",t:"Net Worth Calculator",d:"Add up what you own and what you owe to see your net worth.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Cash and bank savings<input type="number" id="a1" value="5000" step="any"></label><label style="flex:1 1 150px">Investments and retirement<input type="number" id="a2" value="20000" step="any"></label><label style="flex:1 1 150px">Property and vehicles<input type="number" id="a3" value="50000" step="any"></label><label style="flex:1 1 150px">Other assets<input type="number" id="a4" value="1000" step="any"></label><label style="flex:1 1 150px">Home loan / mortgage<input type="number" id="l1" value="30000" step="any"></label><label style="flex:1 1 150px">Other loans<input type="number" id="l2" value="5000" step="any"></label><label style="flex:1 1 150px">Credit card debt<input type="number" id="l3" value="1000" step="any"></label><label style="flex:1 1 150px">Other debts<input type="number" id="l4" value="0" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a1", "a2", "a3", "a4", "l1", "l2", "l3", "l4"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var a=v.a1+v.a2+v.a3+v.a4,l=v.l1+v.l2+v.l3+v.l4;return 'Total assets: <b>'+num(a)+'</b><br>Total debts: <b>'+num(l)+'</b><br>Net worth: <b>'+num(a-l)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter what you own.","Enter what you owe.","Your net worth is assets minus debts."],
faq:[["Which currency?","Any. Use the same currency for every box."]]});
})(AIO);
