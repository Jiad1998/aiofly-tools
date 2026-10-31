(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('email-signature-generator',{cat:'social',ic:'✉️',t:'Email Signature Generator',d:'Create a professional email signature for your business or page.',
h:`<div class="row"><div><label>Full name</label><input type="text" id="n" placeholder="Rafi Ahmed"></div><div><label>Job title</label><input type="text" id="j" placeholder="Founder"></div></div>
<div class="row"><div><label>Company / page</label><input type="text" id="c" placeholder="AioFly"></div><div><label>Phone</label><input type="text" id="p" placeholder="+880 1XXX XXXXXX"></div></div>
<div class="row"><div><label>Email</label><input type="text" id="e" placeholder="name@example.com"></div><div><label>Website</label><input type="text" id="w" placeholder="https://aiofly.blogspot.com"></div></div>
<label>Color</label><input type="color" id="k" value="#4f46e5">
<div class="box"><b>Preview</b><div id="pv" style="margin-top:8px"></div></div>
<button id="c1" type="button">Copy as text</button><button id="c2" type="button">Copy HTML code</button>
<label>HTML code</label><textarea id="code" style="min-height:120px;font-family:monospace;font-size:13px"></textarea>`,
f:function(){
  function v(i){return $(i).value.trim()}
  function build(){
    var col=$('k').value,n=esc(v('n')||'Your Name'),h='<table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;color:#333"><tr><td style="border-left:4px solid '+col+';padding-left:12px">';
    h+='<div style="font-size:18px;font-weight:bold;color:'+col+'">'+n+'</div>';
    var line=[v('j'),v('c')].filter(Boolean).map(esc).join(' | ');
    if(line)h+='<div>'+line+'</div>';
    if(v('p'))h+='<div>Phone: '+esc(v('p'))+'</div>';
    if(v('e'))h+='<div>Email: <a href="mailto:'+esc(v('e'))+'" style="color:'+col+'">'+esc(v('e'))+'</a></div>';
    if(v('w'))h+='<div>Web: <a href="'+esc(v('w'))+'" style="color:'+col+'">'+esc(v('w'))+'</a></div>';
    return h+'</td></tr></table>';
  }
  function text(){var a=[v('n')||'Your Name',[v('j'),v('c')].filter(Boolean).join(' | '),v('p')?'Phone: '+v('p'):'',v('e')?'Email: '+v('e'):'',v('w')?'Web: '+v('w'):''];return a.filter(Boolean).join('\n')}
  function upd(){var h=build();$('pv').innerHTML=h;$('code').value=h}
  ['n','j','c','p','e','w','k'].forEach(function(i){$(i).oninput=upd});upd();
  $('c1').onclick=function(){copyText(text(),this)};
  $('c2').onclick=function(){copyText(build(),this)};
},
how:['Fill in your details. Empty fields are left out.','Choose a color. The preview updates instantly.','Press <b>Copy HTML code</b> and paste it into the signature settings of Gmail or your email app, or copy it as plain text.'],
faq:[['How do I add it to Gmail?','Open Gmail Settings, find Signature, and paste. Some apps need an HTML signature option; plain text always works.'],['Is my information saved?','No. Everything stays in your browser.']]});
})(AIO);
