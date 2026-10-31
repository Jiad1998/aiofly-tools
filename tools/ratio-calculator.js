(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("ratio-calculator",{cat:"calc",ic:"⚖️",t:"Ratio Calculator",d:"Simplify a ratio and scale it up or down.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">A<input type="number" id="a" value="12" step="any"></label><label style="flex:1 1 150px">B<input type="number" id="b" value="18" step="any"></label><label style="flex:1 1 150px">Scale B to<input type="number" id="s" value="90" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "b", "s"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){function g(x,y){while(y){var t=y;y=x%y;x=t}return x}var A=Math.round(v.a),B=Math.round(v.b);if(!A||!B)return 'Use whole numbers above 0 for A and B.';var d=g(Math.abs(A),Math.abs(B));return 'Simplest ratio: <b>'+(A/d)+' : '+(B/d)+'</b><br>If B becomes '+num(v.s)+', A becomes <b>'+num(v.s*A/B)+'</b><br>Decimal ratio A/B: <b>'+num(A/B)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Type A and B.","See the simplest ratio.","Type a new B to find the matching A."],
faq:[["How do I simplify a ratio?","Divide both numbers by their highest common factor."],["Where do ratios help?","Recipes, maps, mixing paint and sharing money."]]});
})(AIO);
