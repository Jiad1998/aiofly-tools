(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('currency-converter',{cat:'convert',ic:'💱',t:'Currency Converter',d:'Convert money between world currencies using daily exchange rates.',
h:`<label>Amount</label><input type="number" id="a" value="1" step="any">
<div class="row"><div><label>From</label><select id="f"></select></div><div><label>To</label><select id="t"></select></div></div>
<button id="sw" type="button">⇄ Swap</button><button id="go" type="button">Convert</button>
<div class="res" id="o">Loading rates...</div>
<p class="note" id="u"></p>
<p class="note">Rates by <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener">ExchangeRate-API</a>. Rates are for information only.</p>`,
f:function(){
  var rates=null,pref=['USD','BDT','INR','AED','SAR','EUR','GBP','PKR','MYR','SGD','CAD','AUD'];
  function fill(id,def){
    var s=$(id),keys=Object.keys(rates).sort(),list=pref.filter(function(c){return rates[c]}).concat(keys.filter(function(c){return pref.indexOf(c)<0}));
    list.forEach(function(c){var o=document.createElement('option');o.value=c;o.textContent=c;if(c===def){o.selected=true}s.appendChild(o)});
  }
  function conv(){
    if(!rates){return}
    var a=parseFloat($('a').value),f=$('f').value,t=$('t').value;
    if(isNaN(a)){$('o').textContent='Enter an amount.';return}
    var v=a*rates[t]/rates[f];
    $('o').innerHTML=a+' '+f+' = <div class="big">'+v.toLocaleString('en-US',{maximumFractionDigits:4})+' '+t+'</div>1 '+f+' = '+(rates[t]/rates[f]).toFixed(4)+' '+t;
  }
  fetch('https://open.er-api.com/v6/latest/USD').then(function(r){return r.json()}).then(function(d){
    if(d.result!=='success'){throw new Error('x')}
    rates=d.rates;fill('f','USD');fill('t','BDT');
    $('u').textContent='Last updated: '+d.time_last_update_utc;conv();
  }).catch(function(){$('o').textContent='Could not load exchange rates. Please check your internet and try again.'});
  $('go').onclick=conv;$('a').oninput=conv;$('f').onchange=conv;$('t').onchange=conv;
  $('sw').onclick=function(){var x=$('f').value;$('f').value=$('t').value;$('t').value=x;conv()};
},
how:['Type the amount.','Choose the currency to convert from and to. Popular ones like USD, BDT and INR are at the top.','The result updates instantly. Press <b>Swap</b> to reverse.'],
faq:[['How often are rates updated?','Rates are refreshed once a day. They are mid-market rates, so banks and exchange shops may charge a little more.'],['Can I use it offline?','No. It needs the internet to fetch today\'s rates.']]});
})(AIO);
