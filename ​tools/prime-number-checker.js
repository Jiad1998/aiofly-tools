(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("prime-number-checker",{cat:"education",ic:"🔍",t:"Prime Number Checker",d:"Check if a number is prime and see its factors.",
h:`<textarea id="i" placeholder="Type a number, for example 97"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var n=parseInt(s,10);if(isNaN(n)||n<2)return 'Type a whole number 2 or bigger.';if(n>1e12)return 'Please use a number up to 1,000,000,000,000.';var f=[],r=n;for(var d=2;d*d<=r;d++){while(r%d===0){f.push(d);r=r/d}}if(r>1)f.push(r);return n+(f.length===1?' is a prime number.':' is not prime.')+'\nPrime factors: '+f.join(' x ')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a whole number.","Read if it is prime.","See its prime factors."],
faq:[["What is a prime number?","A prime has exactly two divisors: 1 and itself. 2, 3, 5 and 7 are primes."],["Is 1 prime?","No. Prime numbers start from 2."]]});
})(AIO);
