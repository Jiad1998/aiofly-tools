(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("standard-deviation-calculator",{cat:"education",ic:"📉",t:"Standard Deviation Calculator",d:"Calculate sample and population standard deviation and variance.",
h:`<label>Enter numbers (separated by comma, space or new line)</label><textarea id="i" placeholder="10, 20, 30, 40">12, 15, 18, 22, 22, 30</textarea><div class="res" id="o"></div>`,
f:function(){
function run(){var a=($('i').value.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)||[]).map(Number);if(!a.length){$('o').textContent='Enter some numbers.';return}var n=a.length,sum=a.reduce(function(x,y){return x+y},0),mean=sum/n,s=a.slice().sort(function(x,y){return x-y});
var med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2,c={};a.forEach(function(x){c[x]=(c[x]||0)+1});var mx=Math.max.apply(0,Object.values(c)),mode=mx>1?Object.keys(c).filter(function(k){return c[k]===mx}).join(', '):'No mode';
var ss=a.reduce(function(x,y){return x+(y-mean)*(y-mean)},0),pv=ss/n,sv=n>1?ss/(n-1):NaN;var R={n:n,sum:sum,mean:mean,med:med,mode:mode,min:s[0],max:s[n-1],range:s[n-1]-s[0],pv:pv,ps:Math.sqrt(pv),sv:sv,ss:Math.sqrt(sv)};
var o;o='Count: <b>'+R.n+'</b><br>Mean: <b>'+num(R.mean)+'</b><br>Population std deviation (σ): <b>'+num(R.ps)+'</b><br>Population variance: <b>'+num(R.pv)+'</b><br>Sample std deviation (s): <b>'+(isNaN(R.ss)?'needs 2+ numbers':num(R.ss))+'</b><br>Sample variance: <b>'+(isNaN(R.sv)?'needs 2+ numbers':num(R.sv))+'</b>';$('o').innerHTML=o}
$('i').oninput=run;run();
},
how:["Type or paste your numbers.","Read both sample and population values."],
faq:[["Sample or population?","Use sample when your numbers are only a part of a bigger group. Use population when you have every value."]]});
})(AIO);
