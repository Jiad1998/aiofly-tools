(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("factorial-calculator",{cat:"education",ic:"❗",t:"Factorial Calculator",d:"Find the factorial (n!) of any number up to 1000.",
h:`<label>Number</label><input type="number" id="n" value="10" min="0" max="1000"><div class="res" id="o" style="word-break:break-all"></div>`,
f:function(){
function run(){var n=parseInt($('n').value);if(isNaN(n)||n<0||n>1000){$('o').textContent='Enter a whole number from 0 to 1000.';return}var x=1n;for(var i=2n;i<=BigInt(n);i++)x*=i;var s=x.toString();$('o').innerHTML=n+'! = <b>'+(s.length>60?s.slice(0,30)+'...'+s.slice(-10)+'</b><br>Digits: <b>'+s.length+'</b><br>Full number:<br>'+s:s+'</b>')}
$('n').oninput=run;run();
},
how:["Enter a whole number.","The factorial shows at once."],
faq:[["What is 0! ?","0! equals 1 by definition."],["What is a factorial?","n! means multiplying all whole numbers from 1 to n."]]});
})(AIO);
