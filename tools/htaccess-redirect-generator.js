(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("htaccess-redirect-generator",{cat:"seo",ic:"↪️",t:"HTAccess Redirect Generator",d:"Create 301 redirect rules for an Apache .htaccess file.",
h:`<label>Old page path (example /old-page)</label><input type="text" id="a" value="/old-page"><label>New URL</label><input type="text" id="b" value="https://example.com/new-page"><label>Redirect type</label><select id="t"><option selected>301</option><option>302</option></select><label>Force HTTPS for whole site</label><select id="w"><option selected>no</option><option>yes</option></select><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:162px"></textarea>`,
f:function(){
var ids=["a", "b", "t", "w"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){var o='';if(v.w==='yes')o+='RewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\n\n';o+='Redirect '+v.t+' '+v.a+' '+v.b;return o})(v)}catch(e){out='Error: '+e.message}$('o').value=out;}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type the old path and the new full URL.","Choose 301 (permanent) or 302 (temporary).","Copy the lines into your .htaccess file."],
faq:[["What is a 301 redirect?","A 301 tells search engines the page has moved permanently, and passes most ranking value to the new page."],["Does it work on Blogger?","No. .htaccess works only on Apache servers. In Blogger use its built-in custom redirects."]]});
})(AIO);
