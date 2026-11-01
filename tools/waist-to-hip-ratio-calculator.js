(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("waist-to-hip-ratio-calculator",{cat:"health",ic:"📐",t:"Waist to Hip Ratio Calculator",d:"Check your waist to hip ratio and a general health risk level.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Gender<select id="g"><option value="1" selected>Male</option><option value="0">Female</option></select></label><label style="flex:1 1 150px">Waist (cm)<input type="number" id="w" value="85" step="any"></label><label style="flex:1 1 150px">Hip (cm)<input type="number" id="h" value="98" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["g", "w", "h"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var r=v.w/v.h,lim=v.g==1?[0.90,1.0]:[0.80,0.85];var l=r<lim[0]?'Low':r<lim[1]?'Moderate':'High';return 'Your ratio: <b>'+r.toFixed(2)+'</b><br>Risk level: <b>'+l+'</b><br><small>General guide only. Ask a doctor for advice.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Choose gender.","Enter waist and hip measurements in cm.","See your ratio and risk level."],
faq:[["What is a healthy ratio?","Below 0.90 for men and below 0.80 for women is generally considered low risk (WHO guide)."]]});
})(AIO);
