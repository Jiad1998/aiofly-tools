(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("local-business-schema-generator",{cat:"seo",ic:"📍",t:"Local Business Schema Generator",d:"Create LocalBusiness JSON-LD schema markup to help your business show up better on Google.",
h:`<label>Business name</label><input type="text" id="n" value="My Shop"><label>Phone</label><input type="text" id="t" value="+1 555 123 4567"><label>Street address</label><input type="text" id="a" value="123 Main Street"><label>City</label><input type="text" id="c" value="Dubai"><label>Region / state</label><input type="text" id="r" value="Dubai"><label>Postal code</label><input type="text" id="p" value="00000"><label>Country code</label><input type="text" id="k" value="AE"><label>Website</label><input type="text" id="u" value="https://example.com"><label>Opening hours (example Mo-Fr 09:00-18:00)</label><input type="text" id="oh" value="Mo-Fr 09:00-18:00"><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:162px"></textarea>`,
f:function(){
var ids=["n", "t", "a", "c", "r", "p", "k", "u", "oh"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){var o={'@context':'https://schema.org','@type':'LocalBusiness',name:v.n,telephone:v.t,url:v.u,address:{'@type':'PostalAddress',streetAddress:v.a,addressLocality:v.c,addressRegion:v.r,postalCode:v.p,addressCountry:v.k},openingHours:v.oh};return '<script type="application/ld+json">\n'+JSON.stringify(o,null,2)+'\n<\/script>'})(v)}catch(e){out='Error: '+e.message}$('o').value=out;}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Fill in your business details.","Copy the generated code.","Paste it into your page head, then test it with Google Rich Results Test."],
faq:[["Does schema improve rankings?","It does not directly raise rankings, but it can help Google understand your business and show richer results."]]});
})(AIO);
