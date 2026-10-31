(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("average-calculator",{cat:"calc",ic:"📊",t:"Average Calculator",d:"Find the mean of up to six numbers.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Number 1<input type="number" id="a" value="10" step="any"></label><label style="flex:1 1 150px">Number 2<input type="number" id="b" value="20" step="any"></label><label style="flex:1 1 150px">Number 3<input type="number" id="c" value="30" step="any"></label><label style="flex:1 1 150px">Number 4<input type="number" id="d" value="40" step="any"></label><label style="flex:1 1 150px">Number 5<input type="number" id="e" value="50" step="any"></label><label style="flex:1 1 150px">Number 6<input type="number" id="f" value="60" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "b", "c", "d", "e", "f"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var a=[v.a,v.b,v.c,v.d,v.e,v.f],s=a.reduce(function(x,y){return x+y},0);return 'Sum: <b>'+num(s)+'</b><br>Average: <b>'+num(s/a.length)+'</b><br>Smallest: <b>'+num(Math.min.apply(0,a))+'</b><br>Largest: <b>'+num(Math.max.apply(0,a))+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Type your numbers.","The average updates by itself.","Also see the smallest and largest."],
faq:[["How is average calculated?","Add all numbers and divide by how many there are."],["Can I use fewer numbers?","Set unused boxes to the same value as the average, or use a different tool for lists."]]});
})(AIO);
