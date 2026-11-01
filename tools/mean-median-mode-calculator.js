(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("mean-median-mode-calculator",{cat:"education",ic:"📈",t:"Mean, Median, Mode Calculator",d:"Find the mean, median, mode, range and more from a list of numbers.",
h:`<label>Enter numbers (separated by comma, space or new line)</label><textarea id="i" placeholder="10, 20, 30, 40">12, 15, 18, 22, 22, 30</textarea><div class="res" id="o"></div>`,
f:function(){
function run(){var a=($('i').value.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)||[]).map(Number);if(!a.length){$('o').textContent='Enter some numbers.';return}var n=a.length,sum=a.reduce(function(x,y){return x+y},0),mean=sum/n,s=a.slice().sort(function(x,y){return x-y});
var med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2,c={};a.forEach(function(x){c[x]=(c[x]||0)+1});var mx=Math.max.apply(0,Object.values(c)),mode=mx>1?Object.keys(c).filter(function(k){return c[k]===mx}).join(', '):'No mode';
var ss=a.reduce(function(x,y){return x+(y-mean)*(y-mean)},0),pv=ss/n,sv=n>1?ss/(n-1):NaN;var R={n:n,sum:sum,mean:mean,med:med,mode:mode,min:s[0],max:s[n-1],range:s[n-1]-s[0],pv:pv,ps:Math.sqrt(pv),sv:sv,ss:Math.sqrt(sv)};
var o;o='Count: <b>'+R.n+'</b><br>Sum: <b>'+num(R.sum)+'</b><br>Mean (average): <b>'+num(R.mean)+'</b><br>Median: <b>'+num(R.med)+'</b><br>Mode: <b>'+R.mode+'</b><br>Smallest: <b>'+num(R.min)+'</b><br>Largest: <b>'+num(R.max)+'</b><br>Range: <b>'+num(R.range)+'</b>';$('o').innerHTML=o}
$('i').oninput=run;run();
},
how:["Type or paste your numbers.","Results appear at once."],
faq:[["What is the difference between mean and median?","Mean is the average. Median is the middle number when sorted."],["What if two numbers repeat equally?","All of them are shown as the mode."]]});
})(AIO);
