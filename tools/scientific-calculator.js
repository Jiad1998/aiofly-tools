(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("scientific-calculator",{cat:"education",ic:"🧮",t:"Scientific Calculator",d:"Online scientific calculator with sin, cos, tan, log, square root, powers and more.",
h:`<input type="text" id="x" placeholder="Example: sin(30)+sqrt(16)^2" style="font-size:20px" inputmode="text"><div class="row"><label><input type="radio" name="m" value="d" checked> Degrees</label><label><input type="radio" name="m" value="r"> Radians</label></div><div id="k" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin:8px 0"></div><div class="res big" id="o">0</div>`,
f:function(){
var keys=['sin(','cos(','tan(','log(','ln(','sqrt(','^','(',')','π','7','8','9','/','C','4','5','6','*','⌫','1','2','3','-','abs(','0','.','e','+','='];
keys.forEach(function(k){var b=document.createElement('button');b.type='button';b.textContent=k;b.style.padding='10px 0';b.onclick=function(){if(k==='C'){$('x').value=''}else if(k==='⌫'){$('x').value=$('x').value.slice(0,-1)}else if(k==='='){calc()}else{$('x').value+=k}calc()};$('k').appendChild(b)});
function calc(){var s=$('x').value.trim();if(!s){$('o').textContent='0';return}var deg=document.querySelector('input[name=m]:checked').value==='d';
var F={sin:function(a){return Math.sin(deg?a*Math.PI/180:a)},cos:function(a){return Math.cos(deg?a*Math.PI/180:a)},tan:function(a){return Math.tan(deg?a*Math.PI/180:a)},asin:function(a){var r=Math.asin(a);return deg?r*180/Math.PI:r},acos:function(a){var r=Math.acos(a);return deg?r*180/Math.PI:r},atan:function(a){var r=Math.atan(a);return deg?r*180/Math.PI:r},log:Math.log10,ln:Math.log,sqrt:Math.sqrt,abs:Math.abs,exp:Math.exp,floor:Math.floor,ceil:Math.ceil,round:Math.round};
var e=s.replace(/π/g,'(Math.PI)').replace(/\be\b/g,'(Math.E)').replace(/\^/g,'**').replace(/\b(asin|acos|atan|sin|cos|tan|log|ln|sqrt|abs|exp|floor|ceil|round)\b/g,'F.$1');
var chk=e.replace(/F\.[a-z]+/g,'').replace(/Math\.(PI|E)/g,'');if(!/^[0-9+\-*\/().,%\s]*$/.test(chk)){$('o').textContent='Invalid expression';return}
try{var r=Function('F','"use strict";return ('+e+')')(F);$('o').textContent=(typeof r==='number'&&isFinite(r))?num(r):'Error'}catch(er){$('o').textContent='...'}}
$('x').oninput=calc;[].forEach.call(document.querySelectorAll('input[name=m]'),function(r){r.onchange=calc});
},
how:["Type an expression or tap the keys.","Choose degrees or radians for sin, cos and tan.","The answer shows instantly."],
faq:[["Which functions are supported?","sin, cos, tan, asin, acos, atan, log (base 10), ln, sqrt, abs, exp, powers (^), pi and e."],["How do I write a power?","Use ^. For example 2^10 gives 1,024."]]});
})(AIO);
