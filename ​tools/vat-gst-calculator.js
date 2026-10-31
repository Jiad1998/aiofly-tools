(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("vat-gst-calculator",{cat:"calc",ic:"🧾",t:"VAT / GST Calculator",d:"Add or remove VAT or GST from a price.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount<input type="number" id="a" value="1000" step="any"></label><label style="flex:1 1 150px">Tax rate %<input type="number" id="r" value="15" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){return 'Tax added: <b>'+num(v.a*v.r/100)+'</b><br>Price with tax: <b>'+num(v.a*(1+v.r/100))+'</b><hr>If the amount already includes tax:<br>Tax inside: <b>'+num(v.a-v.a/(1+v.r/100))+'</b><br>Price without tax: <b>'+num(v.a/(1+v.r/100))+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the amount.","Enter the tax rate.","Read both results: tax added and tax removed."],
faq:[["What is the VAT rate in Bangladesh?","The standard VAT rate is 15 percent, but check the latest rules for your product."],["What is the difference between VAT and GST?","Both are taxes on sales. The name depends on the country."]]});
})(AIO);
