(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("percentage-change-calculator",{cat:"calc",ic:"📉",t:"Percentage Change Calculator",d:"Find the percent increase or decrease between two numbers.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Old value<input type="number" id="a" value="80" step="any"></label><label style="flex:1 1 150px">New value<input type="number" id="b" value="100" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "b"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.a===0)return 'The old value cannot be 0.';var c=(v.b-v.a)/Math.abs(v.a)*100;return (c>=0?'Increase':'Decrease')+': <b>'+num(Math.abs(c))+'%</b><br>Difference: <b>'+num(v.b-v.a)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Type the old value.","Type the new value.","Read the percent change."],
faq:[["What is the formula?","Change = (new - old) / old x 100."],["What if the value falls?","You will see a decrease with the percent."]]});
})(AIO);
