(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("macro-calculator",{cat:"health",ic:"🥗",t:"Macro Calculator",d:"Get daily protein, carbs and fat targets from your calories and goal.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Daily calories<input type="number" id="c" value="2200" step="any"></label><label style="flex:1 1 150px">Goal<select id="g"><option value="1" selected>Balanced (30% protein, 40% carbs, 30% fat)</option><option value="2">Weight loss (35% protein, 35% carbs, 30% fat)</option><option value="3">Muscle gain (30% protein, 45% carbs, 25% fat)</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["c", "g"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var s={1:[30,40,30],2:[35,35,30],3:[30,45,25]}[v.g];return 'Protein: <b>'+Math.round(v.c*s[0]/100/4)+' g</b><br>Carbs: <b>'+Math.round(v.c*s[1]/100/4)+' g</b><br>Fat: <b>'+Math.round(v.c*s[2]/100/9)+' g</b><br><small>General guide only, not medical advice.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your daily calories (use the BMR calculator if unsure).","Pick your goal.","See grams of protein, carbs and fat."],
faq:[["How many calories per gram?","Protein and carbs have 4 calories per gram, fat has 9."]]});
})(AIO);
