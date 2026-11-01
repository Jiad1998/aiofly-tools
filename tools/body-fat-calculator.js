(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("body-fat-calculator",{cat:"health",ic:"📏",t:"Body Fat Calculator",d:"Estimate your body fat percentage with the US Navy method.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Gender<select id="g"><option value="1" selected>Male</option><option value="0">Female</option></select></label><label style="flex:1 1 150px">Height (cm)<input type="number" id="h" value="170" step="any"></label><label style="flex:1 1 150px">Neck (cm)<input type="number" id="n" value="37" step="any"></label><label style="flex:1 1 150px">Waist (cm)<input type="number" id="w" value="85" step="any"></label><label style="flex:1 1 150px">Hip (cm) - women only<input type="number" id="p" value="95" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["g", "h", "n", "w", "p"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var b;if(v.g==1){if(v.w<=v.n)return 'Waist must be larger than neck.';b=495/(1.0324-0.19077*Math.log10(v.w-v.n)+0.15456*Math.log10(v.h))-450}else{if(v.w+v.p<=v.n)return 'Check your measurements.';b=495/(1.29579-0.35004*Math.log10(v.w+v.p-v.n)+0.221*Math.log10(v.h))-450}var cat=v.g==1?(b<6?'Essential':b<14?'Athletic':b<18?'Fit':b<25?'Average':'Above average'):(b<14?'Essential':b<21?'Athletic':b<25?'Fit':b<32?'Average':'Above average');return 'Estimated body fat: <b>'+num(b)+'%</b><br>Category: <b>'+cat+'</b><br><small>This is an estimate, not a medical result.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Choose gender and enter height, neck and waist in cm.","Women also enter hip size.","Read your estimate."],
faq:[["How accurate is it?","It is a rough estimate. Medical scans are more accurate."],["Where should I measure the waist?","Measure at the navel for men and at the narrowest point for women, relaxed and not pulled tight."]]});
})(AIO);
