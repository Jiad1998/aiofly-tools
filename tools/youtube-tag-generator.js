(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("youtube-tag-generator",{cat:"social",ic:"🏷️",t:"YouTube Tag Generator",d:"Create a list of YouTube tags from your main keyword. Copy all tags at once.",
h:`<label>Main keyword</label><input type="text" id="i" value="photo editing"><label>Extra words (optional, comma separated)</label><input type="text" id="x" placeholder="mobile, free"><div class="row"><button id="cp" type="button">Copy all tags</button></div><textarea id="o" readonly style="min-height:140px"></textarea><div class="res" id="n"></div>`,
f:function(){
function run(){var k=$('i').value.trim().toLowerCase();if(!k){$('o').value='';$('n').textContent='';return}
var ex=$('x').value.split(',').map(function(s){return s.trim().toLowerCase()}).filter(Boolean);var pre=['','how to ','best ','free ','top '],suf=['',' tutorial',' for beginners',' tips',' 2026',' in hindi',' in english',' app',' online',' guide'],o=[];
pre.forEach(function(p){suf.forEach(function(s){o.push(p+k+s)})});ex.forEach(function(e){o.push(k+' '+e);o.push(e+' '+k)});
var seen={},r=[],len=0;o.forEach(function(t){if(!seen[t]&&len+t.length+2<=500){seen[t]=1;r.push(t);len+=t.length+2}});
$('o').value=r.join(', ');$('n').innerHTML='<b>'+r.length+'</b> tags, '+r.join(', ').length+' of 500 characters';}
$('i').oninput=run;$('x').oninput=run;$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type your main keyword.","Add extra words if you like.","Press <b>Copy all tags</b> and paste them in YouTube Studio."],
faq:[["How many tags can I use?","YouTube allows up to 500 characters in total. This tool stops before that limit."],["Do tags matter a lot?","They help a little. Your title, description and thumbnail matter more."]]});
})(AIO);
