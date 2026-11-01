(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pythagorean-theorem-calculator",{cat:"education",ic:"📐",t:"Pythagorean Theorem Calculator",d:"Find the missing side of a right triangle.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Side a<input type="number" id="a" value="3" step="any"></label><label style="flex:1 1 150px">Side b<input type="number" id="b" value="4" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "b"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var c=Math.sqrt(v.a*v.a+v.b*v.b);return 'Hypotenuse c: <b>'+num(c)+'</b><br>Area: <b>'+num(v.a*v.b/2)+'</b><br>Perimeter: <b>'+num(v.a+v.b+c)+'</b><br>If c is known and a is '+num(v.a)+': side b = <b>'+(c>v.a?num(Math.sqrt(c*c-v.a*v.a)):'-')+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Type the two shorter sides a and b.","Read the long side c, the area and the perimeter.","Use the formula a² + b² = c²."],
faq:[["What is the theorem?","In a right triangle, the square of the long side equals the sum of the squares of the other two sides."],["Is 3, 4, 5 special?","Yes. It is the best known whole-number right triangle."]]});
})(AIO);
