(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pomodoro-timer",{cat:"calc",ic:"🍅",t:"Pomodoro Timer",d:"Study or work in focused sessions with short breaks.",
h:`<div class="row"><label>Work (min)<input type="number" id="w" value="25" min="1"></label><label>Break (min)<input type="number" id="b" value="5" min="1"></label></div><div class="res big" id="d" style="text-align:center;font-size:56px">25:00</div><div class="res" id="s" style="text-align:center">Ready to focus</div><div class="row"><button id="go" type="button">Start</button><button id="rs" type="button">Reset</button></div>`,
f:function(){
var iv=null,end=0,mode='work',left=0;function z(n){return ('0'+n).slice(-2)}
function show(){$('d').textContent=z(Math.floor(left/60))+':'+z(left%60)}
function beep(){try{var a=new (window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator();o.connect(a.destination);o.frequency.value=660;o.start();setTimeout(function(){o.stop()},600)}catch(e){}}
function setup(){left=(parseInt($(mode==='work'?'w':'b').value,10)||1)*60;show();$('s').textContent=mode==='work'?'Focus time':'Break time'}
function run(){end=Date.now()+left*1000;clearInterval(iv);iv=setInterval(function(){left=Math.max(0,Math.round((end-Date.now())/1000));show();if(left<=0){beep();mode=mode==='work'?'break':'work';setup();run()}},250)}
$('go').onclick=function(){if(iv){clearInterval(iv);iv=null;$('go').textContent='Start'}else{if(!left)setup();run();$('go').textContent='Pause'}};
$('rs').onclick=function(){clearInterval(iv);iv=null;mode='work';setup();$('go').textContent='Start'};setup();
},
how:["Set your work and break minutes.","Press Start.","A beep plays when each session ends."],
faq:[["What is the Pomodoro method?","You work for 25 minutes, then take a 5 minute break. After four rounds take a longer break."],["Can I change the times?","Yes. Set any minutes you like."]]});
})(AIO);
