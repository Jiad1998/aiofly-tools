(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("unit-price-calculator",{cat:"business",ic:"🛒",t:"Unit Price Comparison",d:"Compare two products to see which is the better buy.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Price of product A<input type="number" id="p1" value="120" step="any"></label><label style="flex:1 1 150px">Quantity of A<input type="number" id="q1" value="500" step="any"></label><label style="flex:1 1 150px">Price of product B<input type="number" id="p2" value="210" step="any"></label><label style="flex:1 1 150px">Quantity of B<input type="number" id="q2" value="1000" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p1", "q1", "p2", "q2"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var a=v.p1/v.q1,b=v.p2/v.q2;return 'Product A: <b>'+num(a)+'</b> per unit<br>Product B: <b>'+num(b)+'</b> per unit<br><br>'+(a<b?'Product A is cheaper by <b>'+num((b-a)/b*100)+'%</b>':a>b?'Product B is cheaper by <b>'+num((a-b)/a*100)+'%</b>':'Both cost the same per unit.')})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the price and quantity (grams, ml or pieces) of both products.","Read the price per unit.","Choose the cheaper one."],
faq:[["What unit should I use?","Use the same unit for both, for example grams."],["Is the bigger pack always cheaper?","Not always. This tool shows the real price per unit."]]});
})(AIO);
