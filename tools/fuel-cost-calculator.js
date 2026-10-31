(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("fuel-cost-calculator",{cat:"calc",ic:"⛽",t:"Fuel Cost Calculator",d:"Find the fuel cost of a trip.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Distance (km)<input type="number" id="d" value="120" step="any"></label><label style="flex:1 1 150px">Mileage (km per liter)<input type="number" id="m" value="12" step="any"></label><label style="flex:1 1 150px">Fuel price per liter<input type="number" id="p" value="120" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["d", "m", "p"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.m<=0)return 'Mileage must be above 0.';var l=v.d/v.m;return 'Fuel needed: <b>'+num(l)+' liters</b><br>Trip cost: <b>'+num(l*v.p)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the distance.","Enter your vehicle mileage and the fuel price.","Read the cost."],
faq:[["How do I find my mileage?","Fill the tank, drive a known distance, refill, and divide the distance by the liters added."],["Does it include tolls?","No. Add tolls separately."]]});
})(AIO);
