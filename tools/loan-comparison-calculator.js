(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("loan-comparison-calculator",{cat:"finance",ic:"⚔️",t:"Loan Comparison Calculator",d:"Compare two loan offers side by side.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Loan amount<input type="number" id="a" value="20000" step="any"></label><label style="flex:1 1 150px">Loan A rate %<input type="number" id="r1" value="9" step="any"></label><label style="flex:1 1 150px">Loan A years<input type="number" id="y1" value="5" step="any"></label><label style="flex:1 1 150px">Loan B rate %<input type="number" id="r2" value="8.5" step="any"></label><label style="flex:1 1 150px">Loan B years<input type="number" id="y2" value="7" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "r1", "y1", "r2", "y2"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){function f(r,y){var n=y*12,i=r/1200,m=i?v.a*i/(1-Math.pow(1+i,-n)):v.a/n;return [m,m*n-v.a]}var A=f(v.r1,v.y1),B=f(v.r2,v.y2);return '<b>Loan A</b><br>Monthly: '+num(A[0])+'<br>Total interest: '+num(A[1])+'<br><br><b>Loan B</b><br>Monthly: '+num(B[0])+'<br>Total interest: '+num(B[1])+'<br><br>Cheaper in total: <b>'+(A[1]<B[1]?'Loan A':'Loan B')+'</b> (saves '+num(Math.abs(A[1]-B[1]))+')'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the amount.","Enter the rate and years for both loans.","See which loan costs less overall."],
faq:[["Is the lower monthly payment always better?","No. A longer loan has a smaller payment but usually more total interest."]]});
})(AIO);
