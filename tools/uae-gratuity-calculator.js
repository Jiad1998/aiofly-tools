(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("uae-gratuity-calculator",{cat:"calc",ic:"🇦🇪",t:"UAE Gratuity Calculator",d:"Estimate end of service gratuity for a limited contract in the UAE.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Last basic salary per month (AED)<input type="number" id="b" value="8000" step="any"></label><label style="flex:1 1 150px">Years of service<input type="number" id="y" value="6" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["b", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.y<1)return 'Gratuity is due after at least one year of continuous service.';var d=v.b/30,a=Math.min(v.y,5)*21*d,c=Math.max(0,v.y-5)*30*d,t=a+c,cap=24*v.b;return 'First 5 years (21 days a year): <b>'+num(Math.round(a))+'</b><br>After 5 years (30 days a year): <b>'+num(Math.round(c))+'</b><br><b style="font-size:20px">Gratuity: '+num(Math.round(Math.min(t,cap)))+' AED</b>'+(t>cap?'<br>Capped at two years of pay.':'')+'<br><small>Uses basic salary only. Rules for resignation, unlimited contracts and free-zone companies can differ. Check with the Ministry of Human Resources or your employer.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your last basic monthly salary.","Enter your total years of service.","Read the estimated end of service gratuity."],
faq:[["How is UAE gratuity calculated?","For limited contracts it is 21 days of basic pay for each of the first 5 years and 30 days for each year after."],["Which salary is used?","The last basic salary only. Allowances are usually excluded."],["Is there a limit?","The total cannot go above two years of pay."]]});
})(AIO);
