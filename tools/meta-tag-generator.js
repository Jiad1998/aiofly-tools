(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("meta-tag-generator",{cat:"seo",ic:"🏷️",t:"Meta Tag Generator",d:"Create SEO meta tags and social share tags for your web page.",
h:`<input id="t" placeholder="Page title (up to 60 characters)" maxlength="120"><textarea id="d" placeholder="Short description (up to 160 characters)" style="min-height:80px"></textarea><input id="k" placeholder="Keywords, separated by commas"><input id="u" placeholder="Page address https://..."><input id="im" placeholder="Image address (optional)"><div class="res" id="c"></div><textarea id="o" readonly></textarea><button id="cp" type="button">Copy tags</button>`,
f:function(){
function q(x){return esc(x).replace(/"/g,'&quot;')}
function run(){var t=$('t').value.trim(),d=$('d').value.trim(),k=$('k').value.trim(),u=$('u').value.trim(),im=$('im').value.trim(),o=[];
if(t)o.push('<title>'+q(t)+'</title>');if(d)o.push('<meta name="description" content="'+q(d)+'">');if(k)o.push('<meta name="keywords" content="'+q(k)+'">');
o.push('<meta name="robots" content="index, follow">');
if(t)o.push('<meta property="og:title" content="'+q(t)+'">');if(d)o.push('<meta property="og:description" content="'+q(d)+'">');if(u)o.push('<meta property="og:url" content="'+q(u)+'">');if(im)o.push('<meta property="og:image" content="'+q(im)+'">');
o.push('<meta property="og:type" content="website">');o.push('<meta name="twitter:card" content="'+(im?'summary_large_image':'summary')+'">');
$('o').value=o.join('\n');$('c').innerHTML='Title: <b>'+t.length+'</b>/60 &nbsp; Description: <b>'+d.length+'</b>/160'}
['t','d','k','u','im'].forEach(function(i){$(i).oninput=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type your page title and description.","Add keywords, page address and an image if you have them.","Copy the tags and paste them into the head of your page."],
faq:[["How long should a title be?","Keep it under about 60 characters so search engines show it fully."],["Do meta keywords help ranking?","Google does not use them, but some other tools do. A good title and description matter most."]]});
})(AIO);
