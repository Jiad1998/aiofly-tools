(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("robots-txt-generator",{cat:"seo",ic:"🤖",t:"Robots.txt Generator",d:"Create a robots.txt file for your website with allow, disallow and sitemap lines.",
h:`<textarea id="i" placeholder="Paths to block, one per line (for custom)"></textarea><div class="row"><label>Rule <select id="m"><option value="all">Allow everything</option><option value="none">Block everything</option><option value="custom">Block these paths</option></select></label><label>Bot <input id="ua" value="*"></label></div><input id="sm" placeholder="Sitemap address (optional) https://..."><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var ua=g('ua')||'*',o=['User-agent: '+ua];var d=(s||'').split(/\n/).map(function(x){return x.trim()}).filter(Boolean);if(g('m')==='all'){o.push('Allow: /')}else if(g('m')==='none'){o.push('Disallow: /')}else{d.forEach(function(p){o.push('Disallow: '+(p[0]==='/'?p:'/'+p))});if(!d.length)o.push('Disallow:')}var sm=g('sm').trim();if(sm)o.push('','Sitemap: '+sm);return o.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Choose whether to allow all pages, block all pages, or block certain paths.","For custom blocking, type one path per line in the big box, like /admin/.","Add your sitemap address, then copy the text into a file named robots.txt."],
faq:[["Where do I put robots.txt?","It must be in the main folder of your site so it opens at yoursite.com/robots.txt."],["Does Blogger support it?","Blogger has a custom robots.txt option in Settings under Crawlers and indexing."]]});
})(AIO);
