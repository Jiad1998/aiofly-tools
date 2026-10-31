(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("area-converter",{cat:"convert",ic:"📐",t:"Area Converter",d:"Convert square meter, square feet, acre, hectare, katha, bigha and decimal.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"sq meter": 1, "sq feet": 0.09290304, "sq inch": 0.00064516, "sq yard": 0.83612736, "sq km": 1000000.0, "acre": 4046.8564224, "hectare": 10000, "decimal (shatak)": 40.4685642, "katha (BD)": 66.89, "bigha (BD)": 1337.8};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"sq feet":"sq meter"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type the area value.","Select the unit you have and the unit you want.","Use the list to compare every unit at once."],
faq:[["How many square feet in one katha?","In Bangladesh one katha is about 720 square feet. The value used here is 66.89 square meters."],["How many decimals are in one acre?","One acre is exactly 100 decimals (shatak)."]]});
})(AIO);
