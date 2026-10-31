(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("weight-converter",{cat:"convert",ic:"⚖️",t:"Weight Converter",d:"Convert kilograms, grams, pounds, ounces, tola and more.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"mg": 1e-06, "gram": 0.001, "kg": 1, "tonne": 1000, "ounce": 0.028349523, "pound": 0.45359237, "stone": 6.35029318, "tola": 0.01166375, "ser": 0.9331};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"pound":"kg"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type the weight in the first box.","Pick the unit you have and the unit you want.","The result updates at once, and the list below shows every unit."],
faq:[["How many pounds are in 1 kg?","One kilogram is about 2.2046 pounds."],["What is a tola?","A tola is a traditional South Asian unit of weight, about 11.66 grams, often used for gold."]]});
})(AIO);
