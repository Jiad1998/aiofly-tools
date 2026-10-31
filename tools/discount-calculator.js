(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("discount-calculator",{cat:"calc",ic:"🏷️",t:"Discount Calculator",d:"Find the sale price and how much money you save.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Original price<input type="number" id="p" value="1000" step="any"></label><label style="flex:1 1 150px">Discount %<input type="number" id="d" value="20" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["p", "d"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var s=v.p*v.d/100;return 'You save: <b>'+num(s)+'</b><br>Final price: <b>'+num(v.p-s)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the original price.","Enter the discount percent.","See the final price and savings."],
faq:[["How do I take 20% off?","Multiply the price by 0.8."],["What if there are two discounts?","Apply them one after the other, not added together."]]});
})(AIO);
