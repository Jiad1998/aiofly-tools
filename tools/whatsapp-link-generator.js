(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("whatsapp-link-generator",{cat:"social",ic:"💬",t:"WhatsApp Link Generator",d:"Make a click-to-chat WhatsApp link with a ready message.",
h:`<div class="row"><label>Country code<input id="cc" value="880" inputmode="numeric"></label><label>Phone number<input id="ph" placeholder="1712345678" inputmode="numeric"></label></div><textarea id="m" placeholder="Message (optional)" style="min-height:80px"></textarea><div class="res" id="o"></div><div class="row"><button id="cp" type="button">Copy link</button><a class="btn" id="op" target="_blank" rel="noopener" href="#">Open in WhatsApp</a></div>`,
f:function(){
function run(){var c=$('cc').value.replace(/\D/g,''),p=$('ph').value.replace(/\D/g,'').replace(/^0+/,'');if(!p){$('o').textContent='Enter a phone number.';$('op').style.display='none';return}var u='https://wa.me/'+c+p+($('m').value.trim()?'?text='+encodeURIComponent($('m').value.trim()):'');$('o').innerHTML='<b style="word-break:break-all">'+esc(u)+'</b>';$('op').href=u;$('op').style.display='';$('cp').onclick=function(){copyText(u,$('cp'))}}
['cc','ph','m'].forEach(function(i){$(i).oninput=run});run();
},
how:["Enter the country code (Bangladesh is 880).","Type the number without the first 0.","Add a message if you like and copy the link."],
faq:[["Where can I use the link?","Put it on your Facebook page, bio, website or business card so people can message you in one tap."],["Do I need to save the number?","No. People can start a chat without saving your number."]]});
})(AIO);
