(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("linkedin-headline-generator",{cat:"social",ic:"💼",t:"LinkedIn Headline Generator",d:"Get strong LinkedIn headline ideas for your job or business.",
h:`<label>Your job / role</label><input type="text" id="j" value="Digital Marketer"><label>Your skills (comma separated)</label><input type="text" id="s" value="SEO, Content, Ads"><label>What you help with</label><input type="text" id="v" value="grow small businesses online"><label>Company (optional)</label><input type="text" id="c" value=""><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:180px"></textarea>`,
f:function(){
var ids=["j", "s", "v", "c"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){var s=v.s.split(',').map(function(x){return x.trim()}).filter(Boolean);var c=v.c.trim()?' at '+v.c.trim():'';return [v.j+c+' | '+s.join(' | '),v.j+c+' helping people '+v.v,'I help '+v.v+' | '+v.j,v.j+' | '+s.slice(0,2).join(' & ')+' | Open to opportunities',s.join(' • ')+' | '+v.j+c,v.j+': turning ideas into results | '+s[0]].join('\n\n')})(v)}catch(e){out='Error: '+e.message}$('o').value=out;}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Enter your role, skills and what you help with.","Choose the headline you like.","Copy it into your LinkedIn profile."],
faq:[["How long can a LinkedIn headline be?","Up to 220 characters. Put the most important words first."]]});
})(AIO);
