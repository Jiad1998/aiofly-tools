(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("fraction-calculator",{cat:"education",ic:"➗",t:"Fraction Calculator",d:"Add, subtract, multiply and divide fractions. The answer is simplified.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Numerator 1<input type="number" id="a" value="1" step="any"></label><label style="flex:1 1 150px">Denominator 1<input type="number" id="b" value="2" step="any"></label><label style="flex:1 1 150px">Operation<select id="op"><option value="1" selected>Add (+)</option><option value="2">Subtract (-)</option><option value="3">Multiply (×)</option><option value="4">Divide (÷)</option></select></label><label style="flex:1 1 150px">Numerator 2<input type="number" id="c" value="1" step="any"></label><label style="flex:1 1 150px">Denominator 2<input type="number" id="d" value="3" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "b", "op", "c", "d"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.b===0||v.d===0)return 'Denominator cannot be zero.';function g(x,y){x=Math.abs(x);y=Math.abs(y);while(y){var t=y;y=x%y;x=t}return x}var op=v.op,n,d;
if(op===1){n=v.a*v.d+v.c*v.b;d=v.b*v.d}else if(op===2){n=v.a*v.d-v.c*v.b;d=v.b*v.d}else if(op===3){n=v.a*v.c;d=v.b*v.d}else{if(v.c===0)return 'Cannot divide by zero.';n=v.a*v.d;d=v.b*v.c}
if(d<0){n=-n;d=-d}var k=g(n,d)||1;n/=k;d/=k;var w=Math.trunc(n/d),r=Math.abs(n)%d;return 'Answer: <b>'+n+(d===1?'':'/'+d)+'</b><br>Decimal: <b>'+num(n/d)+'</b>'+(d!==1&&Math.abs(w)>=1?'<br>Mixed number: <b>'+w+' '+r+'/'+d+'</b>':'')})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the two fractions.","Choose an operation.","See the simplified answer, decimal and mixed number."],
faq:[["Does it simplify the answer?","Yes, always to the lowest terms."]]});
})(AIO);
