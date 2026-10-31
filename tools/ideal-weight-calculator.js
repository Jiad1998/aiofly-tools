(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("ideal-weight-calculator",{cat:"calc",ic:"⚖️",t:"Ideal Weight Calculator",d:"Find a healthy weight range for your height.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Gender<select id="g"><option value="50" selected>Male</option><option value="45.5">Female</option></select></label><label style="flex:1 1 150px">Height (cm)<input type="number" id="h" value="170" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["g", "h"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var inch=v.h/2.54,dev=v.g+2.3*Math.max(0,inch-60),m=v.h/100;return 'Devine formula: <b>'+num(Math.round(dev*10)/10)+' kg</b><br>Healthy BMI range (18.5 to 24.9): <b>'+num(Math.round(18.5*m*m*10)/10)+' to '+num(Math.round(24.9*m*m*10)/10)+' kg</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Choose gender and enter your height.","Read the ideal weight and healthy range.","Use it as a general guide only."],
faq:[["Is there one perfect weight?","No. A range is more useful, because bodies differ."],["Can I trust the BMI range?","It is a general guide and does not measure muscle or body fat."]]});
})(AIO);
