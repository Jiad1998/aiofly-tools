(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pressure-converter",{cat:"convert",ic:"🎈",t:"Pressure Converter",d:"Convert pascal, kPa, bar, psi, atm and mmHg.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"Pa": 1, "kPa": 1000, "bar": 100000, "psi": 6894.757, "atm": 101325, "mmHg": 133.322, "inHg": 3386.389};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"bar":"psi"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type the pressure.","Choose the unit you have and the unit you want.","See all units in the list."],
faq:[["How many psi is 1 bar?","One bar is about 14.5 psi."],["What is standard air pressure?","One atmosphere equals 101,325 Pa or 14.7 psi."]]});
})(AIO);
