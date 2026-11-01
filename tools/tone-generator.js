(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("tone-generator",{cat:"audio",ic:"🎵",t:"Online Tone Generator",d:"Play a test tone at any frequency from 50 to 2000 Hz.",
h:`<div class="res big" id="b" style="text-align:center;font-size:40px">440 Hz</div><label>Frequency <input type="range" id="f" min="50" max="2000" value="440"></label><label>Wave <select id="w"><option>sine</option><option>square</option><option>triangle</option><option>sawtooth</option></select></label><div class="row"><button id="go" type="button">▶ Play</button></div>`,
f:function(){
var ac=null,o=null;
function stop(){if(o){try{o.stop()}catch(e){}o=null}$('go').textContent='▶ Play'}
$('f').oninput=function(){$('b').textContent=this.value+' Hz';if(o)o.frequency.value=+this.value};
$('w').onchange=function(){if(o)o.type=this.value};
$('go').onclick=function(){if(o){stop();return}try{if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();o=ac.createOscillator();var g=ac.createGain();g.gain.value=.15;o.type=$('w').value;o.frequency.value=+$('f').value;o.connect(g);g.connect(ac.destination);o.start();$('go').textContent='⏹ Stop'}catch(e){$('b').textContent='Audio not supported'}};
},
how:["Move the slider to pick a frequency.","Choose a wave shape.","Press Play. Keep the volume low at first."],
faq:[["What is 440 Hz?","It is the standard A note used to tune instruments."],["Is it safe?","Keep the volume low. Loud high tones can hurt your ears."]]});
})(AIO);
