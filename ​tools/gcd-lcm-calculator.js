(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("gcd-lcm-calculator",{cat:"education",ic:"🧮",t:"HCF and LCM Calculator",d:"Find the highest common factor (GCD) and lowest common multiple of two numbers.",
h:`<div class="row"><label>First number<input type="number" id="a" value="12"></label><label>Second number<input type="number" id="b" value="18"></label></div><div class="res" id="o"></div>`,
f:function(){
function gcd(a,b){while(b){var t=b;b=a%b;a=t}return a}
function run(){var a=Math.abs(parseInt($('a').value,10)),b=Math.abs(parseInt($('b').value,10));if(!a||!b){$('o').textContent='Type two whole numbers above 0.';return}var g=gcd(a,b);$('o').innerHTML='HCF (GCD): <b>'+g+'</b><br>LCM: <b>'+num(a/g*b)+'</b>'}
$('a').oninput=run;$('b').oninput=run;run();
},
how:["Type two whole numbers.","Read the HCF and LCM.","Use it for fractions and homework."],
faq:[["What is the HCF?","The highest common factor is the largest number that divides both numbers."],["What is the LCM?","The lowest common multiple is the smallest number both numbers divide into."]]});
})(AIO);
