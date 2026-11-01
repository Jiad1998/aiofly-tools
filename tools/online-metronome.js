(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("online-metronome",{cat:"audio",ic:"🥁",t:"Online Metronome",d:"A simple metronome with adjustable tempo from 30 to 240 BPM.",
h:`<div class="res big" id="b" style="text-align:center;font-size:56px">100</div><label>BPM <input type="range" id="r" min="30" max="240" value="100"></label><div class="row"><button id="go" type="button">▶ Start</button></div><div id="dot" style="width:40px;height:40px;border-radius:50%;background:#4f46e5;margin:12px auto;opacity:.3"></div>`,
f:function(){
var ac=null,iv=null,on=false;
function tick(){try{if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();var o=ac.createOscillator(),g=ac.createGain();o.frequency.value=880;g.gain.value=.3;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.05)}catch(e){}$('dot').style.opacity=1;setTimeout(function(){$('dot').style.opacity=.3},90)}
function start(){clearInterval(iv);iv=setInterval(tick,60000/parseInt($('r').value,10));tick()}
$('r').oninput=function(){$('b').textContent=this.value;if(on)start()};
$('go').onclick=function(){on=!on;if(on){start();$('go').textContent='⏹ Stop'}else{clearInterval(iv);$('go').textContent='▶ Start'}};
},
how:["Move the slider to set the tempo.","Press Start.","Press Stop when you finish."],
faq:[["What does BPM mean?","Beats per minute. 60 BPM is one beat each second."],["Is there sound on silent mode?","Your phone may mute browser sound in silent mode. Turn up the media volume."]]});
})(AIO);
