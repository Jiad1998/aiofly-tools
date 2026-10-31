(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("marks-percentage-calculator",{cat:"education",ic:"📝",t:"Marks Percentage Calculator",d:"Find your percentage from marks obtained and total marks.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Marks obtained<input type="number" id="o" value="420" step="any"></label><label style="flex:1 1 150px">Total marks<input type="number" id="t" value="500" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["o", "t"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.t<=0)return 'Total marks must be above 0.';var p=v.o/v.t*100,g=p>=80?'A+':p>=70?'A':p>=60?'A-':p>=50?'B':p>=40?'C':p>=33?'D':'F';return 'Percentage: <b>'+num(p)+'%</b><br>Rough grade: <b>'+g+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter your marks.","Enter the total marks.","Read the percentage."],
faq:[["How is it calculated?","Marks obtained divided by total marks, times 100."],["Is the grade official?","No. It is a rough guide using the common SSC and HSC ranges."]]});
})(AIO);
