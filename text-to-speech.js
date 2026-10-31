(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-to-speech",{cat:"writing",ic:"🔊",t:"Text to Speech",d:"Make your device read text aloud in many voices.",
h:`<textarea id="i" placeholder="Type the text to read aloud..."></textarea><div class="row"><label>Voice <select id="v"></select></label><label>Speed <input type="range" id="s" min="0.5" max="2" step="0.1" value="1"></label></div><div class="row"><button id="go" type="button">▶ Speak</button><button id="st" type="button">⏹ Stop</button></div><div class="res" id="o"></div>`,
f:function(){
var sy=window.speechSynthesis;if(!sy){$('o').textContent='Your browser does not support text to speech.';return}
function fill(){var v=sy.getVoices();$('v').innerHTML=v.map(function(x,i){return '<option value="'+i+'">'+esc(x.name+' ('+x.lang+')')+'</option>'}).join('')||'<option>Default</option>'}
fill();sy.onvoiceschanged=fill;
$('go').onclick=function(){sy.cancel();var u=new SpeechSynthesisUtterance($('i').value||'Hello');var v=sy.getVoices()[parseInt($('v').value,10)];if(v){u.voice=v;u.lang=v.lang}u.rate=parseFloat($('s').value);sy.speak(u)};
$('st').onclick=function(){sy.cancel()};
},
how:["Type or paste your text.","Choose a voice and speed.","Press Speak."],
faq:[["Which voices can I use?","The list shows the voices installed on your device. It changes from phone to phone."],["Can I save the audio?","No. This tool plays the voice on your device only."]]});
})(AIO);
