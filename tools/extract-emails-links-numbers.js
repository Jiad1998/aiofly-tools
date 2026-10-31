(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("extract-emails-links-numbers",{cat:"text",ic:"📧",t:"Extract Emails, Links and Numbers",d:"Pull email addresses, web links, phone numbers or hashtags out of any text.",
h:`<textarea id="i" placeholder="Paste text that contains emails or links..."></textarea><div class="row"><label>Extract <select id="m"><option value="e">Email addresses</option><option value="u">Web links</option><option value="n">Phone numbers</option><option value="h">Hashtags</option></select></label><label><input type="checkbox" id="d" checked> Remove duplicates</label></div><div class="res" id="c"></div><textarea id="o" readonly></textarea><button id="cp" type="button">Copy list</button>`,
f:function(){
var R={e:/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,u:/https?:\/\/[^\s<>"']+/g,n:/\+?\d[\d\s-]{7,}\d/g,h:/#[\w\u0980-\u09ff]+/g};
function run(){var m=($('i').value.match(R[$('m').value])||[]).map(function(x){return x.trim()});if($('d').checked)m=m.filter(function(x,i){return m.indexOf(x)===i});$('o').value=m.join('\n');$('c').innerHTML='Found: <b>'+m.length+'</b>'}
['i','m','d'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your text.","Choose what to extract.","Copy the list."],
faq:[["Does it upload my text?","No. Everything runs in your browser."],["Can it find hashtags?","Yes, including Bangla hashtags."]]});
})(AIO);
