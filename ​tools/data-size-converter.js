(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("data-size-converter",{cat:"convert",ic:"💾",t:"Data Size Converter",d:"Convert bits, bytes, KB, MB, GB and TB.",
h:`<div class="row"><input type="number" id="v" value="1" step="any"><select id="f"></select><select id="t"></select></div><div class="res big" id="r">-</div><div class="box"><b>All units</b><div class="res" id="all"></div></div>`,
f:function(){
var M={"bit": 0.125, "byte": 1, "KB": 1024, "MB": 1048576, "GB": 1073741824, "TB": 1099511627776};var K=Object.keys(M);
['f','t'].forEach(function(id,k){var s=$(id);K.forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?"KB":"MB"});
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var b=v*M[$('f').value];$('r').textContent=num(b/M[$('t').value])+' '+$('t').value;
$('all').innerHTML=K.map(function(u){return esc(u)+': <b>'+num(b/M[u])+'</b>'}).join('<br>')}
$('v').oninput=calc;$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:["Type a size.","Choose the starting and ending unit.","Use it to check file sizes for forms and uploads."],
faq:[["How many KB in 1 MB?","Here 1 MB is 1,024 KB (binary). Some brands use 1,000 instead."],["Why does my 1 TB drive show less?","Drive makers use 1,000-based units while computers show 1,024-based units, so the number looks smaller."]]});
})(AIO);
