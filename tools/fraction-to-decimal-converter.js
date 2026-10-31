(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("fraction-to-decimal-converter",{cat:"convert",ic:"➗",t:"Fraction to Decimal Converter",d:"Turn fractions like 3/8 or 1 1/2 into decimals and decimals into fractions.",
h:`<textarea id="i" placeholder="Example: 3/8 or 0.75"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){s=s.trim();if(!s)return '';var m;if(m=s.match(/^(-?\d+)\s+(\d+)\/(\d+)$/)){if(+m[3]===0)return 'The bottom number cannot be 0.';var w=+m[1],v=Math.abs(w)+(+m[2])/(+m[3]);return String((w<0?-1:1)*parseFloat(v.toFixed(10)))}if(m=s.match(/^(-?\d+)\/(\d+)$/)){if(+m[2]===0)return 'The bottom number cannot be 0.';return String(parseFloat((+m[1]/+m[2]).toFixed(10)))}if(/^-?\d*\.?\d+$/.test(s)){var d=parseFloat(s),sg=d<0?-1:1;d=Math.abs(d);var h1=1,h0=0,k1=0,k0=1,b=d,i=0;while(i++<20){var a=Math.floor(b);var h2=a*h1+h0,k2=a*k1+k0;h0=h1;h1=h2;k0=k1;k1=k2;if(Math.abs(d-h1/k1)<1e-9||b===a)break;b=1/(b-a)}return (sg<0?'-':'')+h1+'/'+k1}return 'Type a fraction (3/8), a mixed number (1 1/2) or a decimal (0.75).'})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a fraction, a mixed number or a decimal.","The answer appears at once.","Copy it."],
faq:[["How do I write a mixed number?","Type the whole number, a space, then the fraction, like 2 3/4."],["Why is the answer not exact?","Repeating decimals like 1/3 are rounded to 10 places."]]});
})(AIO);
