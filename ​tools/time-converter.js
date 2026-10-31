(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("time-converter",{cat:"convert",ic:"⏱️",t:"Time Converter",d:"Convert seconds, minutes, hours, days, weeks, months and years.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"second": 1, "minute": 60, "hour": 3600, "day": 86400, "week": 604800, "month (30 d)": 2592000, "year (365 d)": 31536000};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"minute":"hour"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Enter the time value.","Choose the unit you have and the unit you want.","See every unit in the list below."],
faq:[["How many seconds in a day?","A day has 86,400 seconds."],["Is a month always 30 days?","No. This tool uses 30 days for a month and 365 days for a year, which is a simple approximation."]]});
})(AIO);
