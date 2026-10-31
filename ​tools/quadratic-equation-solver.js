(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("quadratic-equation-solver",{cat:"education",ic:"📐",t:"Quadratic Equation Solver",d:"Solve ax² + bx + c = 0 with steps.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">a<input type="number" id="a" value="1" step="any"></label><label style="flex:1 1 150px">b<input type="number" id="b" value="-3" step="any"></label><label style="flex:1 1 150px">c<input type="number" id="c" value="2" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "b", "c"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.a===0)return 'a must not be 0.';var d=v.b*v.b-4*v.a*v.c,o='Discriminant: <b>'+num(d)+'</b><br>';if(d>0){var s=Math.sqrt(d);o+='Two real roots:<br>x1 = <b>'+num((-v.b+s)/(2*v.a))+'</b><br>x2 = <b>'+num((-v.b-s)/(2*v.a))+'</b>'}else if(d===0){o+='One root: x = <b>'+num(-v.b/(2*v.a))+'</b>'}else{var s2=Math.sqrt(-d)/(2*Math.abs(v.a));o+='Complex roots:<br>x = <b>'+num(-v.b/(2*v.a))+' ± '+num(s2)+'i</b>'}return o})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Type the numbers a, b and c from your equation.","Read the discriminant and the roots.","Check your homework answers."],
faq:[["What is the formula?","x = (-b ± √(b² - 4ac)) / 2a."],["What if the discriminant is negative?","The roots are complex numbers."]]});
})(AIO);
