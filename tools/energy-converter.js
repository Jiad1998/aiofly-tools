(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("energy-converter",{cat:"convert",ic:"🔋",t:"Energy Converter",d:"Convert joules, calories, kWh and BTU.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"joule": 1, "kJ": 1000, "calorie": 4.184, "kcal": 4184, "Wh": 3600, "kWh": 3600000, "BTU": 1055.056};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"kJ":"kcal"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type the energy value.","Pick the starting and ending units.","Read the answer."],
faq:[["Is a food Calorie a kcal?","Yes. The Calorie on food labels is one kilocalorie."],["How many joules in a kWh?","One kilowatt hour is 3.6 million joules."]]});
})(AIO);
