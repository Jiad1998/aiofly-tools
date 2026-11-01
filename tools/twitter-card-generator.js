(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("twitter-card-generator",{cat:"seo",ic:"🐦",t:"Twitter (X) Card Generator",d:"Create Twitter/X card meta tags for better looking shared links.",
h:`<label>Title</label><input type="text" id="t" value="My Page Title"><label>Description</label><textarea id="d" style="min-height:70px">A short description of the page.</textarea><label>Image URL</label><input type="text" id="i" value="https://example.com/image.jpg"><label>Your @username</label><input type="text" id="h" value="@mysite"><label>Card type</label><select id="c"><option>summary</option><option selected>summary_large_image</option></select><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:162px"></textarea>`,
f:function(){
var ids=["t", "d", "i", "h", "c"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){return ['<meta name="twitter:card" content="'+v.c+'">','<meta name="twitter:site" content="'+esc(v.h)+'">','<meta name="twitter:title" content="'+esc(v.t)+'">','<meta name="twitter:description" content="'+esc(v.d)+'">','<meta name="twitter:image" content="'+esc(v.i)+'">'].join('\n')})(v)}catch(e){out='Error: '+e.message}$('o').value=out;}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Enter title, description and image link.","Choose the card type.","Copy the tags into your page head."],
faq:[["Which card type should I use?","summary_large_image shows a big picture and is best for most pages."]]});
})(AIO);
