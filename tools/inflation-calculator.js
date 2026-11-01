(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("inflation-calculator",{cat:"calc",ic:"🛒",t:"Inflation Calculator",d:"See what an amount of money could be worth in the future after inflation.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount today<input type="number" id="a" value="1000" step="any"></label><label style="flex:1 1 150px">Average inflation % per year<input type="number" id="r" value="3" step="any"></label><label style="flex:1 1 150px">Years<input type="number" id="y" value="10" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "r", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var f=Math.pow(1+v.r/100,v.y);return 'Cost of the same things in '+v.y+' years: <b>'+num(Math.round(v.a*f))+'</b><br>Buying power of '+num(v.a)+' in '+v.y+' years: about <b>'+num(Math.round(v.a/f))+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter an amount.","Enter the yearly inflation rate and the years.","See the future cost and the lost buying power."],
faq:[["What is inflation?","It is the general rise in prices over time, which reduces what each unit of money can buy."],["What rate should I use?","Many countries aim for around 2 to 3 percent, but real rates vary."]]});
})(AIO);
