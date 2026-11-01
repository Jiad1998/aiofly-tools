(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("income-tax-calculator-india",{cat:"calc",ic:"🧮",t:"Income Tax Calculator (India)",d:"Compare income tax under the new and old regime for a resident individual.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 160px">Yearly income (INR)<input type="number" id="i" value="1500000" step="any"></label><label style="flex:1 1 160px">Salaried?<select id="s"><option value="1">Yes (standard deduction)</option><option value="0">No</option></select></label><label style="flex:1 1 160px">Old regime deductions (80C etc.)<input type="number" id="d" value="150000" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
function slab(t,sl){var tax=0,prev=0;for(var i=0;i<sl.length;i++){var up=sl[i][0],r=sl[i][1];if(t>prev){tax+=(Math.min(t,up)-prev)*r}prev=up}return tax}
function run(){var inc=parseFloat($('i').value),sal=$('s').value==='1',d=parseFloat($('d').value)||0;if(isNaN(inc)||inc<0){$('o').textContent='Enter your yearly income.';return}
var tn=Math.max(0,inc-(sal?75000:0)),tx=slab(tn,[[400000,0],[800000,.05],[1200000,.10],[1600000,.15],[2000000,.20],[2400000,.25],[Infinity,.30]]);
if(tn<=1200000)tx=0;else tx=Math.min(tx,tn-1200000);var cn=tx*1.04;
var to=Math.max(0,inc-(sal?50000:0)-d),xo=slab(to,[[250000,0],[500000,.05],[1000000,.20],[Infinity,.30]]);if(to<=500000)xo=0;var co=xo*1.04;
function f(x){return num(Math.round(x))}
$('o').innerHTML='<b>New regime (FY 2025-26)</b><br>Taxable income: <b>'+f(tn)+'</b><br>Tax with 4% cess: <b>'+f(cn)+'</b> (about '+f(cn/12)+' per month)<hr><b>Old regime</b><br>Taxable income: <b>'+f(to)+'</b><br>Tax with 4% cess: <b>'+f(co)+'</b> (about '+f(co/12)+' per month)<hr>'+(cn<=co?'The <b>new regime</b> costs less by <b>'+f(co-cn)+'</b>.':'The <b>old regime</b> costs less by <b>'+f(cn-co)+'</b>.')+'<br><small>Estimate for resident individuals under 60. Surcharge for very high incomes and other deductions are not included. Check the Income Tax Department site for the latest rules.</small>'}
['i','s','d'].forEach(function(x){$(x).oninput=run;$(x).onchange=run});run();
},
how:["Enter your yearly income.","Say if you are salaried and enter your old-regime deductions.","Compare the tax under both regimes."],
faq:[["Which slabs does it use?","The new regime slabs of FY 2025-26 with the rebate that makes income up to 12 lakh taxable at nil, and the old regime slabs for people under 60."],["Is this my final tax?","No. Surcharge, other income and special rules are not included. Check the official website or ask a tax professional."],["What is cess?","A 4 percent health and education cess is added to the tax."]]});
})(AIO);
