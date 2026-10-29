(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('percentage-calculator',{cat:'calc',ic:'%',t:'Percentage Calculator',d:'Quick percentage calculations: percent of a number, what percent, and percent change.',
h:`<div class="box"><b>What is X% of Y?</b><div class="row"><input type="number" id="a1" placeholder="X (%)" step="any"><input type="number" id="b1" placeholder="Y" step="any"></div><div class="res big" id="r1">-</div></div>
<div class="box"><b>X is what percent of Y?</b><div class="row"><input type="number" id="a2" placeholder="X" step="any"><input type="number" id="b2" placeholder="Y" step="any"></div><div class="res big" id="r2">-</div></div>
<div class="box"><b>Percent change from X to Y</b><div class="row"><input type="number" id="a3" placeholder="From (X)" step="any"><input type="number" id="b3" placeholder="To (Y)" step="any"></div><div class="res big" id="r3">-</div></div>`,
f:function(){
  function n(i){var v=parseFloat($(i).value);return isNaN(v)?null:v}
  function r(x){return Math.round(x*10000)/10000}
  function calc(){
    var a=n('a1'),b=n('b1');$('r1').textContent=(a===null||b===null)?'-':r(a/100*b);
    a=n('a2');b=n('b2');$('r2').textContent=(a===null||b===null||b===0)?'-':r(a/b*100)+'%';
    a=n('a3');b=n('b3');
    if(a===null||b===null||a===0){$('r3').textContent='-'}
    else{var c=(b-a)/Math.abs(a)*100;$('r3').textContent=(c>=0?'Increase of ':'Decrease of ')+r(Math.abs(c))+'%'}
  }
  ['a1','b1','a2','b2','a3','b3'].forEach(function(i){$(i).oninput=calc});
},
how:['Choose the box that matches your question.','Type two numbers.','The answer appears instantly.'],
faq:[['How do I find a discount?','Use the first box. For a 20% discount on 500, enter 20 and 500: the discount is 100.'],['How do I find percent change?','Use the third box. From 100 to 150 is an increase of 50%.']]});
})(AIO);
