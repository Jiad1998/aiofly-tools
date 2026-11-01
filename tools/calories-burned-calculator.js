(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("calories-burned-calculator",{cat:"health",ic:"🔥",t:"Calories Burned Calculator",d:"Estimate calories burned in walking, running, cycling and more.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Activity<select id="a"><option value="3.5" selected>Walking (slow)</option><option value="4.3">Walking (brisk)</option><option value="8.3">Running (8 km/h)</option><option value="11.5">Running (11 km/h)</option><option value="7.5">Cycling (moderate)</option><option value="7">Swimming</option><option value="3">Yoga</option><option value="8">Football / Cricket</option><option value="5">Dancing</option><option value="6">Gym workout</option></select></label><label style="flex:1 1 150px">Body weight (kg)<input type="number" id="w" value="70" step="any"></label><label style="flex:1 1 150px">Minutes<input type="number" id="m" value="30" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "w", "m"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var c=v.a*3.5*v.w/200*v.m;return 'Calories burned: <b>'+Math.round(c)+' kcal</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Choose an activity.","Enter your weight and the minutes.","See the calories burned."],
faq:[["How is it calculated?","It uses MET values: calories = MET x 3.5 x weight in kg / 200 x minutes."],["Is it exact?","No. It is an estimate and actual burn depends on your body and effort."]]});
})(AIO);
