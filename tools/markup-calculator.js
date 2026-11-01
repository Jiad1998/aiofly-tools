(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("markup-calculator",{cat:"business",ic:"📈",t:"Markup Calculator",d:"Find selling price, profit and margin from cost and markup percentage.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Cost price<input type="number" id="c" value="100" step="any"></label><label style="flex:1 1 150px">Markup %<input type="number" id="m" value="30" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["c", "m"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var p=v.c*(1+v.m/100),g=p-v.c;return 'Selling price: <b>'+num(p)+'</b><br>Profit: <b>'+num(g)+'</b><br>Profit margin: <b>'+num(g/p*100)+'%</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your cost price.","Enter the markup percentage you want.","See the selling price, profit and margin."],
faq:[["What is the difference between markup and margin?","Markup is profit as a percentage of cost. Margin is profit as a percentage of the selling price. A 30% markup gives about 23% margin."]]});
})(AIO);
