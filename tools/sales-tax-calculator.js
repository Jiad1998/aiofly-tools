(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("sales-tax-calculator",{cat:"calc",ic:"🧾",t:"Sales Tax Calculator",d:"Add sales tax to a price or find the price before tax.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount<input type="number" id="a" value="100" step="any"></label><label style="flex:1 1 150px">Tax rate %<input type="number" id="r" value="8.25" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){return 'Tax on this price: <b>'+num(Math.round(v.a*v.r)/100)+'</b><br>Price with tax: <b>'+num(Math.round(v.a*(100+v.r))/100)+'</b><hr>If the amount already includes tax:<br>Tax inside: <b>'+num(Math.round((v.a-v.a/(1+v.r/100))*100)/100)+'</b><br>Price before tax: <b>'+num(Math.round(v.a/(1+v.r/100)*100)/100)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the amount.","Enter your local sales tax rate.","Read both the tax added and the tax inside a total."],
faq:[["What is my sales tax rate?","It depends on your state and city. Check your receipt or your state revenue website."],["Does it work for VAT?","Yes. VAT works the same way. Use your VAT rate."]]});
})(AIO);
