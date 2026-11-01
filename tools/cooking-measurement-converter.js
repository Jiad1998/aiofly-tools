(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("cooking-measurement-converter",{cat:"convert",ic:"🥄",t:"Cooking Measurement Converter",d:"Convert cups, spoons, grams and ounces for common ingredients like flour, sugar and butter.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Ingredient<select id="i"><option value="240">Water / milk</option><option value="120" selected>All-purpose flour</option><option value="200">Sugar (white)</option><option value="213">Brown sugar</option><option value="227">Butter</option><option value="185">Rice (uncooked)</option><option value="340">Honey</option><option value="90">Rolled oats</option><option value="130">Cocoa powder</option></select></label><label style="flex:1 1 150px">Amount<input type="number" id="a" value="1" step="any"></label><label style="flex:1 1 150px">Unit<select id="u"><option value="1" selected>Cup</option><option value="0.0625">Tablespoon</option><option value="0.0208333">Teaspoon</option><option value="0.0042">Millilitre (ml)</option><option value="0">Gram (g)</option><option value="-1">Ounce (oz)</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["i", "a", "u"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var cups;if(v.u===0)cups=v.a/v.i;else if(v.u===-1)cups=v.a*28.3495/v.i;else cups=v.a*v.u;var g=cups*v.i;return 'Cups: <b>'+num(cups)+'</b><br>Tablespoons: <b>'+num(cups*16)+'</b><br>Teaspoons: <b>'+num(cups*48)+'</b><br>Millilitres: <b>'+num(cups*240)+'</b><br>Grams: <b>'+num(g)+'</b><br>Ounces: <b>'+num(g/28.3495)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Choose the ingredient.","Enter the amount and unit.","Read all the equal measures."],
faq:[["Why does the ingredient matter?","A cup of flour weighs less than a cup of sugar, so grams depend on the ingredient."],["Which cup size is used?","A US cup of 240 ml."]]});
})(AIO);
