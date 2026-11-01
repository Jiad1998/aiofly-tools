(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("working-days-calculator",{cat:"calc",ic:"💼",t:"Working Days Calculator",d:"Count working days between two dates, with Friday-Saturday weekends.",
h:`<div class="row"><label>From<input type="date" id="a"></label><label>To<input type="date" id="b"></label></div><div class="row"><label>Weekend<select id="w"><option value="56">Friday and Saturday (Bangladesh)</option><option value="06">Saturday and Sunday</option><option value="5">Friday only</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var t=new Date();$('a').value=t.toISOString().slice(0,10);t.setDate(t.getDate()+30);$('b').value=t.toISOString().slice(0,10);
function run(){var a=new Date($('a').value+'T00:00:00'),b=new Date($('b').value+'T00:00:00');if(isNaN(a)||isNaN(b)){$('o').textContent='Pick two dates.';return}if(a>b){var x=a;a=b;b=x}var we=$('w').value.split('').map(Number),w=0,h=0,tot=0;for(var d=new Date(a);d<=b;d.setDate(d.getDate()+1)){tot++;if(we.indexOf(d.getDay())>-1)h++;else w++}$('o').innerHTML='Working days: <b>'+w+'</b><br>Weekend days: <b>'+h+'</b><br>Total days (including both dates): <b>'+tot+'</b><br><small>Public holidays are not counted.</small>'}
['a','b','w'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});run();
},
how:["Pick the start and end dates.","Choose your weekend days.","Read the working days."],
faq:[["Are holidays counted?","No. Only weekends are removed. Subtract public holidays yourself."],["Are both dates included?","Yes, the start and end dates are both counted."]]});
})(AIO);
