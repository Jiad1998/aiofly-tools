(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("youtube-description-generator",{cat:"social",ic:"📝",t:"YouTube Description Generator",d:"Create a ready-to-use YouTube video description with timestamps, links and hashtags.",
h:`<label>Video title</label><input type="text" id="t" value="How to make a QR code"><label>What the video is about (1-2 sentences)</label><textarea id="s" style="min-height:70px">In this video I show how to make a free QR code step by step.</textarea><label>Your website / link</label><input type="text" id="l" value="https://aiofly.blogspot.com"><label>Channel name</label><input type="text" id="c" value="My Channel"><label>Hashtags (3-5)</label><input type="text" id="h" value="#qrcode #tutorial #free"><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:162px"></textarea>`,
f:function(){
var ids=["t", "s", "l", "c", "h"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){return v.t+'\n\n'+v.s+'\n\n⏱ Timestamps:\n00:00 Intro\n00:30 Main steps\n02:00 Final result\n\n🔗 Useful link: '+v.l+'\n\n👍 If this video helped you, please like, share and subscribe to '+v.c+' for more videos.\n\n💬 Have a question? Write it in the comments.\n\n'+v.h})(v)}catch(e){out='Error: '+e.message}$('o').value=out;}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Fill in your video title and a short summary.","Add your link, channel name and hashtags.","Copy the description and paste it in YouTube Studio."],
faq:[["Why add timestamps?","They help viewers jump to parts of the video and can show up as chapters."],["Where do hashtags go?","Put 3 to 5 hashtags at the end of the description."]]});
})(AIO);
