(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("exponent-root-calculator",{cat:"education",ic:"√",t:"Exponent and Root Calculator",d:"Find powers, square roots, cube roots and any root.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Number<input type="number" id="x" value="64" step="any"></label><label style="flex:1 1 150px">Power<input type="number" id="p" value="3" step="any"></label><label style="flex:1 1 150px">Root (n)<input type="number" id="r" value="2" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["x", "p", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){return 'Square root: <b>'+(v.x>=0?num(Math.sqrt(v.x)):'not real')+'</b><br>Cube root: <b>'+num(Math.cbrt(v.x))+'</b><br>'+num(v.x)+' to the power '+num(v.p)+': <b>'+num(Math.pow(v.x,v.p))+'</b><br>'+num(v.r)+'th root: <b>'+(v.x<0&&v.r%2===0?'not real':num((v.x<0?-1:1)*Math.pow(Math.abs(v.x),1/v.r)))+'</b><br>Square: <b>'+num(v.x*v.x)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Type a number.","Set the power and the root.","Read all the answers together."],
faq:[["What is a cube root?","It is the number that, multiplied by itself three times, gives your number."],["Why is the square root of a negative number not real?","No real number times itself gives a negative result."]]});
})(AIO);
