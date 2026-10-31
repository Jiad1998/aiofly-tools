(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("water-intake-calculator",{cat:"calc",ic:"💧",t:"Water Intake Calculator",d:"Estimate how much water you should drink each day.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Weight (kg)<input type="number" id="w" value="65" step="any"></label><label style="flex:1 1 150px">Exercise minutes per day<input type="number" id="e" value="30" step="any"></label><label style="flex:1 1 150px">Weather<select id="t"><option value="0" selected>Normal</option><option value="0.5">Hot or humid</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["w", "e", "t"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var l=v.w*0.033+v.e/30*0.35+v.t;return 'Daily water: <b>'+num(Math.round(l*10)/10)+' liters</b><br>About <b>'+Math.round(l*1000/250)+' glasses</b> (250 ml each)<br><small>This is a general guide. Needs differ from person to person.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your weight.","Enter exercise minutes and choose the weather.","Read your daily water amount."],
faq:[["Do I need 8 glasses?","Eight glasses is a rough rule. Your weight, activity and weather change the amount."],["Does tea or fruit count?","Yes, other drinks and water-rich foods add to your intake."]]});
})(AIO);
