(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("youtube-timestamp-link-generator",{cat:"social",ic:"⏱️",t:"YouTube Timestamp Link Generator",d:"Make a YouTube link that starts at an exact time.",
h:`<input id="u" placeholder="YouTube video link"><div class="row"><label>Minutes <input type="number" id="m" value="1" min="0"></label><label>Seconds <input type="number" id="s" value="30" min="0" max="59"></label></div><div class="res" id="e"></div><textarea id="o" readonly></textarea><button id="cp" type="button">Copy link</button>`,
f:function(){
function run(){var u=$('u').value.trim(),m=u.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([A-Za-z0-9_-]{11})/);$('e').textContent='';if(!u){$('o').value='';return}if(!m){$('e').textContent='This does not look like a YouTube link.';$('o').value='';return}var t=(parseInt($('m').value,10)||0)*60+(parseInt($('s').value,10)||0);$('o').value='https://youtu.be/'+m[1]+(t?'?t='+t:'')}
['u','m','s'].forEach(function(i){$(i).oninput=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste the YouTube link.","Set the minutes and seconds.","Copy the new link."],
faq:[["How does a timestamp link work?","The ?t= part tells YouTube to start the video at that second."],["Does it work for Shorts?","Shorts links are converted to a normal video link with a start time."]]});
})(AIO);
