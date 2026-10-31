(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("break-even-calculator",{cat:"business",ic:"⚖️",t:"Break-Even Calculator",d:"Find how many units you must sell to cover your costs.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Fixed costs<input type="number" id="f" value="50000" step="any"></label><label style="flex:1 1 150px">Price per unit<input type="number" id="p" value="500" step="any"></label><label style="flex:1 1 150px">Variable cost per unit<input type="number" id="v" value="300" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["f", "p", "v"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var m=v.p-v.v;if(m<=0)return 'Price must be higher than the variable cost.';var u=Math.ceil(v.f/m);return 'Profit per unit: <b>'+num(m)+'</b><br>Break-even units: <b>'+num(u)+'</b><br>Break-even sales: <b>'+num(u*v.p)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter fixed costs like rent and salaries.","Enter the price and variable cost per unit.","Read how many units you need to sell."],
faq:[["What are fixed costs?","Costs that stay the same however much you sell, such as rent."],["What are variable costs?","Costs that grow with every unit, such as materials."]]});
})(AIO);
