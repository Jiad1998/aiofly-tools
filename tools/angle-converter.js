(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("angle-converter",{cat:"convert",ic:"📐",t:"Angle Converter",d:"Convert degrees, radians, gradians and turns.",
h:`<div class="row"><input type="number" id="v" value="180" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"degree": 1, "radian": 57.29577951, "gradian": 0.9, "turn": 360, "arcminute": 0.016666666666666666, "arcsecond": 0.0002777777777777778};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"radian":"degree"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type the angle.","Choose the units.","Read the result."],
faq:[["How many degrees in a radian?","One radian is about 57.2958 degrees."],["How many degrees in a full turn?","360 degrees."]]});
})(AIO);
