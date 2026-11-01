(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("sitemap-xml-generator",{cat:"seo",ic:"🗺️",t:"Sitemap XML Generator",d:"Turn a list of page addresses into a sitemap.xml file.",
h:`<textarea id="i" placeholder="https://example.com/
https://example.com/about"></textarea><div class="row"><label>Change frequency <select id="f"><option>daily</option><option selected>weekly</option><option>monthly</option><option>yearly</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var u=s.split(/\n/).map(function(x){return x.trim()}).filter(Boolean);if(!u.length)return '';var d=new Date().toISOString().slice(0,10),f=g('f');function x(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+u.map(function(p){return '  <url>\n    <loc>'+x(p)+'</loc>\n    <lastmod>'+d+'</lastmod>\n    <changefreq>'+f+'</changefreq>\n  </url>'}).join('\n')+'\n</urlset>'})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your page addresses, one per line.","Choose how often the pages change.","Copy the XML and save it as sitemap.xml."],
faq:[["What is a sitemap?","It is a list of your pages that helps search engines find them."],["Do I need one for Blogger?","Blogger already makes one at /sitemap.xml. This tool is for other sites."]]});
})(AIO);
