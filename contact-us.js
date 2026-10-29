(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
var SITE='AioFly',URL_='https://aiofly.blogspot.com',UPD='October 27, 2026';function em(){return A.C.email||''}
add('contact-us',{cat:'info',legal:1,h:`<h1>Contact Us</h1><p>We would love to hear from you: questions, feedback, a tool idea or a problem you found. Fill in the form and your email app will open with the message ready to send.</p>
<div class="at-body"><label>Your name</label><input type="text" id="cn" placeholder="Your name">
<label>Subject</label><input type="text" id="cs" placeholder="How can we help?">
<label>Message</label><textarea id="cm" placeholder="Write your message here..."></textarea>
<button id="cg" type="button">Send message</button>
<div class="res" id="cr" style="display:none"></div></div>
<h2>Email</h2><p>${em()?'You can also write to us directly at <b>'+em().replace(/@/,' [at] ')+'</b>.':'Please use the form above.'}</p>
<h2>Response time</h2><p>We read every message and usually reply within 2-3 working days.</p>`});
A.pages['contact-us'].f=function(){
  $('cg').onclick=function(){
    var n=$('cn').value.trim(),s=$('cs').value.trim()||'Message from website',m=$('cm').value.trim(),r=$('cr');
    r.style.display='block';
    if(!m){r.innerHTML='<span class="bad">Please write your message.</span>';return}
    if(!em()){r.innerHTML='<span class="bad">Contact email is not set yet.</span>';return}
    location.href='mailto:'+em()+'?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent((n?'Name: '+n+'\n\n':'')+m);
    r.innerHTML='<span class="ok">Your email app should open now. If it does not, please email us directly.</span>';
  };
};
})(AIO);
