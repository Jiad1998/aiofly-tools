(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("speed-converter",{cat:"convert",ic:"🚗",t:"Speed Converter",d:"Convert km/h, mph, m/s, knots and feet per second.",
h:`<div class="row"><input type="number" id="v" value="100" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"m/s": 1, "km/h": 0.2777778, "mph": 0.44704, "knot": 0.5144444, "ft/s": 0.3048};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"mph":"km/h"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Enter a speed.","Pick the unit you have and the one you want.","The result and all units show instantly."],
faq:[["How do I convert km/h to mph?","Multiply km/h by 0.6214 to get mph."],["What is a knot?","A knot is one nautical mile per hour, about 1.852 km/h. Ships and planes use it."]]});
})(AIO);
