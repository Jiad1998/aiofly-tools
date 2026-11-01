(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("prime-factorization-calculator",{cat:"education",ic:"🧬",t:"Prime Factorization Calculator",d:"Break any number into its prime factors.",
h:`<label>Number</label><input type="number" id="n" value="360" min="2"><div class="res" id="o"></div>`,
f:function(){
function run(){var n=parseInt($('n').value);if(isNaN(n)||n<2||n>9007199254740991){$('o').textContent='Enter a whole number of 2 or more.';return}var m=n,f={},p=2;while(p*p<=m&&p<94906266){while(m%p===0){f[p]=(f[p]||0)+1;m/=p}p+=p===2?1:2}if(m>1)f[m]=(f[m]||0)+1;var k=Object.keys(f);
$('o').innerHTML=n+' = <b>'+k.map(function(x){return f[x]>1?x+'<sup>'+f[x]+'</sup>':x}).join(' × ')+'</b>'+(k.length===1&&f[k[0]]===1?'<br>This is a prime number.':'')+'<br>All factors: '+k.map(function(x){return (x+' ').repeat(f[x])}).join('').trim().split(' ').join(', ')}
$('n').oninput=run;run();
},
how:["Enter a number.","See its prime factors."],
faq:[["What is a prime number?","A number greater than 1 that can only be divided by 1 and itself."]]});
})(AIO);
