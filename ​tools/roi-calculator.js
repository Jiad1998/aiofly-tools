(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("roi-calculator",{cat:"business",ic:"📊",t:"ROI Calculator",d:"Calculate return on investment in money and percent.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount invested<input type="number" id="i" value="100000" step="any"></label><label style="flex:1 1 150px">Final value<input type="number" id="r" value="130000" step="any"></label><label style="flex:1 1 150px">Years held<input type="number" id="y" value="2" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["i", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var g=v.r-v.i,roi=g/v.i*100,an=v.y>0&&v.r>0?(Math.pow(v.r/v.i,1/v.y)-1)*100:0;return 'Gain: <b>'+num(g)+'</b><br>ROI: <b>'+num(roi)+'%</b><br>Per year (compound): <b>'+num(an)+'%</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the money you put in.","Enter what it is worth now.","Read your ROI and yearly return."],
faq:[["What is ROI?","Return on investment is the gain divided by the amount invested."],["Is a high ROI always good?","Compare it with the time and risk involved."]]});
})(AIO);
