(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("online-stopwatch",{cat:"calc",ic:"⏱️",t:"Online Stopwatch",d:"A simple stopwatch with lap times.",
h:`<div class="res big" id="d" style="text-align:center;font-size:48px;font-variant-numeric:tabular-nums">00:00:00.0</div><div class="row"><button id="s" type="button">Start</button><button id="l" type="button">Lap</button><button id="r" type="button">Reset</button></div><div class="res" id="o"></div>`,
f:function(){
var t0=0,el=0,run=false,iv,laps=[];
function f(ms){var t=Math.floor(ms/100),d=t%10,s=Math.floor(t/10)%60,m=Math.floor(t/600)%60,h=Math.floor(t/36000);function z(n){return ('0'+n).slice(-2)}return z(h)+':'+z(m)+':'+z(s)+'.'+d}
function tick(){$('d').textContent=f(el+(run?Date.now()-t0:0))}
$('s').onclick=function(){if(!run){t0=Date.now();run=true;iv=setInterval(tick,50);$('s').textContent='Stop'}else{el+=Date.now()-t0;run=false;clearInterval(iv);$('s').textContent='Start';tick()}};
$('l').onclick=function(){var n=el+(run?Date.now()-t0:0);laps.push(n);$('o').innerHTML=laps.map(function(x,i){return 'Lap '+(i+1)+': <b>'+f(x)+'</b>'}).reverse().join('<br>')};
$('r').onclick=function(){clearInterval(iv);run=false;el=0;laps=[];$('s').textContent='Start';$('o').innerHTML='';tick()};
},
how:["Press Start.","Press Lap to save a time.","Press Stop, then Reset."],
faq:[["Is it accurate?","It is accurate to a tenth of a second."],["Does it keep running if I switch apps?","It keeps the correct time because it uses the clock, but the screen may update only when you return."]]});
})(AIO);
