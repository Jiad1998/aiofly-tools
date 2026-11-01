(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("protein-intake-calculator",{cat:"health",ic:"🍗",t:"Protein Intake Calculator",d:"Estimate how much protein you need each day.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Body weight (kg)<input type="number" id="w" value="70" step="any"></label><label style="flex:1 1 150px">Activity level<select id="a"><option value="0.8">Sedentary (0.8 g/kg)</option><option value="1.2" selected>Lightly active (1.2 g/kg)</option><option value="1.6">Regular exercise (1.6 g/kg)</option><option value="2.0">Athlete / muscle gain (2.0 g/kg)</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["w", "a"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var p=v.w*v.a;return 'Daily protein: <b>'+Math.round(p)+' g</b><br>Per meal (4 meals): <b>'+Math.round(p/4)+' g</b><br><small>General guide only. People with kidney problems should ask a doctor.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your weight in kg.","Choose your activity level.","Read the daily protein target."],
faq:[["Is more protein always better?","No. Beyond about 2 g per kg there is little extra benefit."]]});
})(AIO);
