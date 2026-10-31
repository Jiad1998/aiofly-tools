(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('emi-calculator',{cat:'calc',ic:'🏦',t:'EMI / Loan Calculator',d:'Calculate your monthly loan payment, total interest and total amount.',
h:`<label>Loan amount</label><input type="number" id="p" placeholder="500000" step="any">
<label>Yearly interest rate (%)</label><input type="number" id="r" step="0.01" placeholder="9.5">
<div class="row"><div><label>Loan period</label><input type="number" id="n" placeholder="5" step="any"></div>
<div><label>Period type</label><select id="u"><option value="12">Years</option><option value="1">Months</option></select></div></div>
<button id="go" type="button">Calculate EMI</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  function f(n){return n.toLocaleString('en-US',{maximumFractionDigits:2})}
  $('go').onclick=function(){
    var P=parseFloat($('p').value),R=parseFloat($('r').value),N=parseFloat($('n').value)*parseInt($('u').value),o=$('o');
    o.style.display='block';
    if(!(P>0)||!(N>0)||isNaN(R)||R<0||R>100||N>720){o.innerHTML='<span class="bad">Please enter valid numbers (interest 0-100%, period up to 60 years).</span>';return}
    var r=R/12/100,emi;
    if(r===0){emi=P/N}else{var pw=Math.pow(1+r,N);emi=P*r*pw/(pw-1)}
    var tot=emi*N;
    o.innerHTML='Monthly EMI<div class="big">'+f(emi)+'</div>Total interest: <b>'+f(tot-P)+'</b><br>Total payment: <b>'+f(tot)+'</b><br>Number of payments: <b>'+Math.round(N)+'</b>';
  };
},
how:['Enter the loan amount and yearly interest rate.','Enter the period in years or months.','Press <b>Calculate EMI</b> to see your monthly payment.'],
faq:[['What is EMI?','EMI means Equated Monthly Instalment: the fixed amount you pay every month to repay a loan with interest.'],['Does it work for any currency?','Yes. Enter the amount in your own currency and the result is in the same currency.']]});
})(AIO);
