(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("volume-converter",{cat:"convert",ic:"🧪",t:"Volume Converter",d:"Convert liters, milliliters, gallons, cups, tablespoons and cubic meters.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"ml": 0.001, "liter": 1, "cubic meter": 1000, "teaspoon": 0.00492892, "tablespoon": 0.01478676, "fluid ounce": 0.02957353, "cup": 0.2365882, "pint": 0.4731765, "US gallon": 3.785411784};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"cup":"liter"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type the volume.","Choose the starting and ending units.","Read the answer or scroll through all units."],
faq:[["How many ml are in a cup?","A US cup is about 236.6 ml."],["How many liters are in a US gallon?","One US gallon is about 3.785 liters."]]});
})(AIO);
