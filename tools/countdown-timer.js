(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("countdown-timer",{cat:"calc",ic:"⏳",t:"Countdown Timer",d:"Set minutes and seconds and get a beep when time is up.",
h:`<div class="row"><label>Minutes <input type="number" id="m" value="5" min="0"></label><label>Seconds <input type="number" id="s" value="0" min="0" max="59"></label></div><div class="res big" id="d" style="text-align:center;font-size:48px">05:00</div><div class="row"><button id="go" type="button">Start</button><button id="rs" type="button">Reset</button></div>`,
f:function(){
var iv,end=0;function z(n){return ('0'+n).slice(-2)}
function show(sec){$('d').textContent=z(Math.floor(sec/60))+':'+z(sec%60)}
function beep(){try{var a=new (window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator();o.connect(a.destination);o.frequency.value=880;o.start();setTimeout(function(){o.stop()},700)}catch(e){}}
$('go').onclick=function(){clearInterval(iv);var s=(parseInt($('m').value,10)||0)*60+(parseInt($('s').value,10)||0);if(s<=0)return;end=Date.now()+s*1000;show(s);iv=setInterval(function(){var l=Math.max(0,Math.round((end-Date.now())/1000));show(l);if(l<=0){clearInterval(iv);beep();$('d').textContent='Time is up!'}},250)};
$('rs').onclick=function(){clearInterval(iv);show((parseInt($('m').value,10)||0)*60+(parseInt($('s').value,10)||0))};
},
how:["Set the minutes and seconds.","Press Start.","A beep plays when the timer ends."],
faq:[["Does it make a sound?","Yes, a short beep plays when the time is up. Turn up your volume."],["Can I use it for cooking or study?","Yes. Many people use it for exams, cooking and workouts."]]});
})(AIO);
