(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("heart-rate-zones-calculator",{cat:"health",ic:"💓",t:"Heart Rate Zones Calculator",d:"Find your maximum heart rate and training zones from your age.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Age<input type="number" id="a" value="30" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var m=220-v.a;var z=[['Warm up',.5,.6],['Fat burn',.6,.7],['Cardio',.7,.8],['Hard',.8,.9],['Peak',.9,1]];return 'Maximum heart rate: <b>'+m+' bpm</b><br><br>'+z.map(function(x){return x[0]+': <b>'+Math.round(m*x[1])+' - '+Math.round(m*x[2])+' bpm</b>'}).join('<br>')})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your age.","Read your maximum heart rate.","Use the zones to plan your workout intensity."],
faq:[["How is it calculated?","Maximum heart rate is estimated as 220 minus your age. Zones are percentages of that number."],["Is it exact?","No. It is a common estimate and real values differ between people."]]});
})(AIO);
