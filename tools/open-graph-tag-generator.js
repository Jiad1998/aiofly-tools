(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("open-graph-tag-generator",{cat:"seo",ic:"🔗",t:"Open Graph Tag Generator",d:"Create Open Graph meta tags so your page looks great when shared on Facebook, WhatsApp and LinkedIn.",
h:`<label>Page title</label><input type="text" id="t" value="My Page Title"><label>Description</label><textarea id="d" style="min-height:70px">A short description of the page.</textarea><label>Page URL</label><input type="text" id="u" value="https://example.com/page"><label>Image URL</label><input type="text" id="i" value="https://example.com/image.jpg"><label>Site name</label><input type="text" id="s" value="My Website"><label>Type</label><select id="y"><option selected>website</option><option>article</option><option>product</option><option>video.other</option></select><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:162px"></textarea>`,
f:function(){
var ids=["t", "d", "u", "i", "s", "y"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){return ['<meta property="og:title" content="'+esc(v.t)+'">','<meta property="og:description" content="'+esc(v.d)+'">','<meta property="og:type" content="'+v.y+'">','<meta property="og:url" content="'+esc(v.u)+'">','<meta property="og:image" content="'+esc(v.i)+'">','<meta property="og:site_name" content="'+esc(v.s)+'">'].join('\n')})(v)}catch(e){out='Error: '+e.message}$('o').value=out;}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Fill in the title, description, URL and image link.","Choose the page type.","Copy the tags and paste them inside the <head> of your page."],
faq:[["What image size is best?","1200 x 630 pixels works best for most platforms."],["Where do I paste the tags?","Inside the head section of your HTML page."]]});
})(AIO);
