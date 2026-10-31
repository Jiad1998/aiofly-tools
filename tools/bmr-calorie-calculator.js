(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("bmr-calorie-calculator",{cat:"calc",ic:"🔥",t:"BMR and Calorie Calculator",d:"Estimate how many calories your body needs each day.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Gender<select id="g"><option value="5">Male</option><option value="-161">Female</option></select></label><label style="flex:1 1 150px">Weight (kg)<input type="number" id="w" value="65" step="any"></label><label style="flex:1 1 150px">Height (cm)<input type="number" id="h" value="170" step="any"></label><label style="flex:1 1 150px">Age<input type="number" id="a" value="25" step="any"></label><label style="flex:1 1 150px">Activity<select id="x"><option value="1.2">Little or no exercise</option><option value="1.375" selected>Light exercise 1-3 days</option><option value="1.55">Moderate 3-5 days</option><option value="1.725">Hard exercise 6-7 days</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["g", "w", "h", "a", "x"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var b=10*v.w+6.25*v.h-5*v.a+v.g,t=b*v.x;return 'BMR: <b>'+num(Math.round(b))+'</b> kcal per day<br>To keep your weight: <b>'+num(Math.round(t))+'</b> kcal<br>To lose weight slowly: <b>'+num(Math.round(t-500))+'</b> kcal<br>To gain weight slowly: <b>'+num(Math.round(t+500))+'</b> kcal<br><small>This is an estimate. Talk to a doctor or dietitian for medical advice.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Choose gender and enter weight, height and age.","Pick your activity level.","Read your daily calorie needs."],
faq:[["What is BMR?","Basal metabolic rate is the energy your body uses at rest."],["Which formula is used?","The Mifflin-St Jeor equation."]]});
})(AIO);
