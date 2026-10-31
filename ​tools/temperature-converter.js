(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("temperature-converter",{cat:"convert",ic:"🌡️",t:"Temperature Converter",d:"Convert Celsius, Fahrenheit and Kelvin instantly.",
h:`<div class="row"><input type="number" id="v" value="25" step="any"><select id="f"><option>Celsius</option><option>Fahrenheit</option><option>Kelvin</option></select></div><div class="res big" id="r">-</div><div class="res" id="all"></div>`,
f:function(){
function calc(){var v=parseFloat($('v').value);if(isNaN(v)){$('r').textContent='-';$('all').innerHTML='';return}
var u=$('f').value,c=u==='Celsius'?v:u==='Fahrenheit'?(v-32)*5/9:v-273.15;
var F=c*9/5+32,K=c+273.15;$('r').textContent=num(c)+' °C = '+num(F)+' °F = '+num(K)+' K';
$('all').innerHTML=c<-273.15?'This is below absolute zero.':'Celsius: <b>'+num(c)+'</b><br>Fahrenheit: <b>'+num(F)+'</b><br>Kelvin: <b>'+num(K)+'</b>'}
$('v').oninput=calc;$('f').onchange=calc;calc();
},
how:["Type the temperature.","Choose Celsius, Fahrenheit or Kelvin as the unit you have.","All three values are shown together."],
faq:[["How do I convert Celsius to Fahrenheit?","Multiply by 9, divide by 5, then add 32. For example 25 °C is 77 °F."],["What is absolute zero?","Absolute zero is 0 K, which equals -273.15 °C. Nothing can be colder."]]});
})(AIO);
