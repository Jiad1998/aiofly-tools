(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("credit-card-payoff-calculator",{cat:"calc",ic:"💳",t:"Credit Card Payoff Calculator",d:"Find out how long it takes to pay off a credit card and how much interest you pay.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Balance<input type="number" id="b" value="5000" step="any"></label><label style="flex:1 1 150px">APR % per year<input type="number" id="a" value="22" step="any"></label><label style="flex:1 1 150px">Monthly payment<input type="number" id="p" value="200" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["b", "a", "p"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var r=v.a/1200;if(v.p<=v.b*r)return 'Your payment does not even cover the monthly interest ('+num(Math.round(v.b*r*100)/100)+'). Increase the payment.';var n=r===0?v.b/v.p:-Math.log(1-v.b*r/v.p)/Math.log(1+r),m=Math.ceil(n),tot=v.p*n;return 'Time to pay off: <b>'+Math.floor(m/12)+' years '+(m%12)+' months</b> ('+m+' months)<br>Total interest: <b>'+num(Math.round(tot-v.b))+'</b><br>Total paid: <b>'+num(Math.round(tot))+'</b><br>Try a higher payment to save interest.'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your card balance and APR.","Enter how much you can pay each month.","See how long it takes and how much interest you pay."],
faq:[["Why is it taking so long?","If your payment is close to the monthly interest, almost nothing reduces the balance."],["How can I pay it off faster?","Pay more than the minimum, and avoid new purchases on the card."]]});
})(AIO);
