(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("attendance-percentage-calculator",{cat:"education",ic:"📅",t:"Attendance Percentage Calculator",d:"Find your attendance percentage and how many classes you can miss.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Total classes held so far<input type="number" id="t" value="100" step="any"></label><label style="flex:1 1 150px">Classes attended<input type="number" id="a" value="82" step="any"></label><label style="flex:1 1 150px">Required attendance %<input type="number" id="r" value="75" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["t", "a", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.a>v.t)return 'Attended cannot be more than total.';var p=v.a/v.t*100,q=v.r/100,need=Math.max(0,Math.ceil((q*v.t-v.a)/(1-q))),miss=Math.max(0,Math.floor(v.a/q-v.t));return 'Attendance: <b>'+num(p)+'%</b><br>'+(p>=v.r?'You can miss up to <b>'+miss+'</b> more classes and stay at '+v.r+'%.':'You must attend the next <b>'+need+'</b> classes in a row to reach '+v.r+'%.')})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter total classes and classes attended.","Enter the required percentage.","See how many you can miss or must attend."],
faq:[["How is it calculated?","Attendance % = attended divided by total, times 100."]]});
})(AIO);
