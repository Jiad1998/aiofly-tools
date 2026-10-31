(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("zakat-calculator",{cat:"calc",ic:"🕌",t:"Zakat Calculator",d:"Work out zakat at 2.5 percent on your savings and assets.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Cash and bank savings<input type="number" id="c" value="200000" step="any"></label><label style="flex:1 1 150px">Gold value<input type="number" id="g" value="100000" step="any"></label><label style="flex:1 1 150px">Silver value<input type="number" id="s" value="0" step="any"></label><label style="flex:1 1 150px">Business stock and receivables<input type="number" id="b" value="0" step="any"></label><label style="flex:1 1 150px">Debts you owe<input type="number" id="d" value="20000" step="any"></label><label style="flex:1 1 150px">Silver price per gram<input type="number" id="p" value="130" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["c", "g", "s", "b", "d", "p"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var net=v.c+v.g+v.s+v.b-v.d,nis=612.36*v.p;return 'Net wealth: <b>'+num(net)+'</b><br>Nisab (612.36 g silver): <b>'+num(Math.round(nis))+'</b><br>'+(net>=nis?'Zakat due (2.5%): <b>'+num(Math.round(net*0.025))+'</b>':'Your wealth is below the nisab, so zakat is not due.')+'<br><small>Please ask a scholar for rulings that apply to you.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your savings, gold, silver, business assets and debts.","Enter the current price of silver per gram to find the nisab.","Read if zakat is due and how much."],
faq:[["What is the nisab?","It is the minimum wealth after which zakat is due. Here it is worked out from 612.36 grams of silver."],["Is this a religious ruling?","No. It does the math only. Ask a qualified scholar about your case."]]});
})(AIO);
