(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('length-converter',{cat:'convert',ic:'📏',t:'Length Converter',d:'Convert feet and inches to centimeters, and between inch, cm, meter, km and miles.',
h:`<div class="box"><b>Feet and inches to cm</b><div class="row"><input type="number" id="ft" placeholder="Feet (5)" step="any"><input type="number" id="inc" placeholder="Inches (7)" step="any"></div><div class="res big" id="r1">-</div></div>
<div class="box"><b>cm to feet and inches</b><input type="number" id="cm" placeholder="Centimeters (170)" step="any"><div class="res big" id="r3">-</div></div>
<div class="box"><b>Any length unit</b><div class="row"><input type="number" id="v" placeholder="Value" step="any" value="1"><select id="f"></select><select id="t"></select></div><div class="res big" id="r2">-</div></div>`,
f:function(){
  var M={mm:.001,cm:.01,m:1,km:1000,inch:.0254,foot:.3048,yard:.9144,mile:1609.344};
  ['f','t'].forEach(function(id,k){var s=$(id);Object.keys(M).forEach(function(u){var o=document.createElement('option');o.value=u;o.textContent=u;s.appendChild(o)});s.value=k?'cm':'inch'});
  function n(i){var x=parseFloat($(i).value);return isNaN(x)?null:x}
  function calc(){
    var f=n('ft'),i=n('inc');
    if(f===null&&i===null){$('r1').textContent='-'}else{var cm=((f||0)*12+(i||0))*2.54;$('r1').textContent=num(cm)+' cm ('+num(cm/100)+' m)'}
    var c=n('cm');
    if(c===null){$('r3').textContent='-'}else{var ti=c/2.54,ff=Math.floor(ti/12),ii=ti-ff*12;$('r3').textContent=ff+' ft '+num(Math.round(ii*100)/100)+' in'}
    var v=n('v');
    if(v===null){$('r2').textContent='-'}else{$('r2').textContent=num(v*M[$('f').value]/M[$('t').value])+' '+$('t').value}
  }
  ['ft','inc','cm','v'].forEach(function(i){$(i).oninput=calc});$('f').onchange=calc;$('t').onchange=calc;calc();
},
how:['For height, type feet and inches (for example 5 and 7) to get centimeters.','Or type centimeters to get feet and inches.','Use the third box to convert between mm, cm, meter, km, inch, foot, yard and mile.'],
faq:[['How many cm is 5 feet 7 inches?','5 feet 7 inches is about 170.18 cm.'],['How many cm are in one inch?','One inch is exactly 2.54 centimeters.']]});
})(AIO);
