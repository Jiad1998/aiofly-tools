(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("number-to-words-converter",{cat:"convert",ic:"🔠",t:"Number to Words Converter",d:"Write numbers in English words, including Taka amounts with lakh and crore.",
h:`<textarea id="i" placeholder="Example: 1250000"></textarea><div class="row"><label>Style <select id="m"><option value="t">Taka (Lakh/Crore)</option><option value="s">Lakh/Crore</option><option value="i">International</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var t=s.replace(/[,\s]/g,'');if(!t)return '';if(!/^-?\d+(\.\d+)?$/.test(t))return 'Type a number.';var neg=t[0]==='-';if(neg)t=t.slice(1);var parts=t.split('.'),ip=parts[0].replace(/^0+(?=\d)/,'');if(ip.length>15)return 'Please use up to 15 digits.';
var o=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'],tn=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
function two(n){return n<20?o[n]:tn[Math.floor(n/10)]+(n%10?' '+o[n%10]:'')}
function three(n){var r='';if(n>=100){r=o[Math.floor(n/100)]+' Hundred';n%=100;if(n)r+=' '}return r+(n?two(n):'')}
function words(n,sa){if(n===0)return 'Zero';var r=[],x=n;if(sa){var cr=Math.floor(x/1e7);x%=1e7;var la=Math.floor(x/1e5);x%=1e5;var th=Math.floor(x/1e3);x%=1e3;if(cr>=100){var big=words(cr,true);r.push(big+' Crore')}else if(cr)r.push(two(cr)+' Crore');if(la)r.push(two(la)+' Lakh');if(th)r.push(two(th)+' Thousand');if(x)r.push(three(x));return r.join(' ')}
var sc=['','Thousand','Million','Billion','Trillion'],i=0;while(x>0){var c=x%1000;if(c)r.unshift(three(c)+(sc[i]?' '+sc[i]:''));x=Math.floor(x/1000);i++}return r.join(' ')}
var n=Number(ip),m=g('m'),sa=m!=='i',out;
if(m==='t'){var paisa=parts[1]?parseInt((parts[1]+'00').slice(0,2),10):0;out=words(n,true)+' Taka'+(paisa?' and '+two(paisa)+' Paisa':'')+' Only'}else{out=words(n,sa);if(parts[1])out+=' Point '+parts[1].split('').map(function(d){return d==='0'?'Zero':o[+d]}).join(' ')}
return (neg?'Minus ':'')+out})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a number.","Choose International, Lakh/Crore or Taka style.","Copy the words for cheques and forms."],
faq:[["What is the Lakh and Crore style?","It is the South Asian system: 1,00,000 is one lakh and 1,00,00,000 is one crore."],["Can I use it for a cheque?","It gives the correct words. Always check your cheque carefully before signing."]]});
})(AIO);
