(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("random-number-generator",{cat:"gen",ic:"🎲",t:"Random Number Generator",d:"Generate random numbers in any range. Choose how many and whether to allow repeats.",
h:`<div class="row"><label style="flex:1 1 100px">Minimum<input type="number" id="a" value="1"></label><label style="flex:1 1 100px">Maximum<input type="number" id="b" value="100"></label><label style="flex:1 1 100px">How many<input type="number" id="c" value="5" min="1" max="1000"></label></div><label><input type="checkbox" id="u"> No repeated numbers</label><button id="go" type="button">Generate</button> <button id="cp" type="button">Copy</button><div class="res big" id="o"></div>`,
f:function(){
function go(){var a=Math.ceil(+$('a').value),b=Math.floor(+$('b').value),c=Math.min(1000,Math.max(1,parseInt($('c').value)||1));if(isNaN(a)||isNaN(b)||a>b){$('o').textContent='Check the minimum and maximum.';return}var n=b-a+1,r=[];
if($('u').checked){if(c>n){$('o').textContent='Not enough different numbers in that range.';return}var s={};while(r.length<c){var x=a+rnd(n);if(!s[x]){s[x]=1;r.push(x)}}}else for(var i=0;i<c;i++)r.push(a+rnd(n));$('o').textContent=r.join(', ')}
$('go').onclick=go;$('cp').onclick=function(){copyText($('o').textContent,$('cp'))};go();
},
how:["Set the minimum and maximum.","Choose how many numbers you want.","Press <b>Generate</b>."],
faq:[["Is it truly random?","It uses your browser's secure random generator, which is suitable for games and draws."],["Can I use it for a lucky draw?","Yes, for fun draws. Do not use it for legal lotteries."]]});
})(AIO);
