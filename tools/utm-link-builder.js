(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("utm-link-builder",{cat:"seo",ic:"🔗",t:"UTM Link Builder",d:"Add UTM tags to a link so you can track where visitors come from.",
h:`<input id="u" placeholder="Page address https://example.com/page"><div class="row" style="flex-wrap:wrap"><input id="s" placeholder="Source (facebook)" style="flex:1 1 150px"><input id="m" placeholder="Medium (social)" style="flex:1 1 150px"></div><input id="c" placeholder="Campaign name (spring_sale)"><div class="row"><input id="t" placeholder="Term (optional)"><input id="n" placeholder="Content (optional)"></div><textarea id="o" readonly></textarea><button id="cp" type="button">Copy link</button>`,
f:function(){
function run(){var u=$('u').value.trim();if(!u){$('o').value='';return}var p=[['utm_source','s'],['utm_medium','m'],['utm_campaign','c'],['utm_term','t'],['utm_content','n']].filter(function(x){return $(x[1]).value.trim()}).map(function(x){return x[0]+'='+encodeURIComponent($(x[1]).value.trim())});$('o').value=p.length?u+(u.indexOf('?')>-1?'&':'?')+p.join('&'):u}
['u','s','m','c','t','n'].forEach(function(i){$(i).oninput=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type your page address.","Fill in source, medium and campaign.","Copy the tagged link and use it in your posts."],
faq:[["What is a UTM tag?","It is a small label added to a link so analytics tools can show which post or campaign brought the visit."],["Which fields are required?","Source, medium and campaign are the most important. Term and content are optional."]]});
})(AIO);
