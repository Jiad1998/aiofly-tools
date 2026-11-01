(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("google-serp-preview",{cat:"seo",ic:"👀",t:"Google SERP Preview",d:"See how your title and description may look in Google search.",
h:`<input id="t" placeholder="Page title" maxlength="120"><input id="u" placeholder="https://example.com/page"><textarea id="d" placeholder="Description" style="min-height:80px"></textarea><div class="res" id="c"></div><div class="box" id="pv" style="background:#fff;color:#202124;font-family:Arial,sans-serif"></div>`,
f:function(){
function run(){var t=$('t').value||'Your page title',u=$('u').value||'https://example.com/page',d=$('d').value||'Your description will show here.',tt=t.length>60?t.slice(0,57)+'...':t,dd=d.length>160?d.slice(0,157)+'...':d;
$('pv').innerHTML='<div style="font-size:13px;color:#4d5156">'+esc(u)+'</div><div style="font-size:20px;color:#1a0dab;margin:2px 0">'+esc(tt)+'</div><div style="font-size:14px;color:#4d5156">'+esc(dd)+'</div>';
$('c').innerHTML='Title: <b style="color:'+(t.length>60?'#ef4444':'inherit')+'">'+t.length+'</b>/60 &nbsp; Description: <b style="color:'+(d.length>160?'#ef4444':'inherit')+'">'+d.length+'</b>/160'}
['t','u','d'].forEach(function(i){$(i).oninput=run});run();
},
how:["Type your title, address and description.","Watch the preview and the character counters.","Shorten the text if the counters turn red."],
faq:[["How long should a title be?","Around 50 to 60 characters."],["Will Google show exactly this?","Not always. Google may rewrite titles and descriptions."]]});
})(AIO);
