(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('qr-code-generator',{cat:'gen',ic:'🔳',t:'QR Code Generator',d:'Create a free QR code for any link or text and download it as an image.',
h:`<label>Text or link</label><textarea id="t" style="min-height:90px" placeholder="https://example.com"></textarea>
<label>Size</label><select id="sz"><option value="200">Small (200px)</option><option value="300" selected>Medium (300px)</option><option value="400">Large (400px)</option></select>
<button id="go" type="button">Generate QR Code</button>
<div id="qr" style="background:#fff;display:inline-block;padding:10px;margin-top:10px"></div><br>
<button id="dl" type="button" style="display:none">⬇ Download PNG</button>`,
f:function(){
  var box=$('qr');
  $('go').onclick=function(){
    var t=$('t').value.trim();if(!t){alert('Please enter text or a link.');return}
    lib('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',function(){return typeof QRCode!=='undefined'},function(ok){
      if(!ok){alert('The QR engine could not load. Please check your internet.');return}
      box.innerHTML='';var sz=parseInt($('sz').value);
      new QRCode(box,{text:t,width:sz,height:sz,correctLevel:QRCode.CorrectLevel.M});
      $('dl').style.display='inline-block';
    });
  };
  $('dl').onclick=function(){
    var c=box.querySelector('canvas'),src=c?c.toDataURL('image/png'):((box.querySelector('img')||{}).src);
    if(!src){return}
    var a=document.createElement('a');a.href=src;a.download='qr-code.png';document.body.appendChild(a);a.click();a.remove();
  };
},
how:['Type or paste a link, phone number or any text.','Choose a size and press <b>Generate QR Code</b>.','Press <b>Download PNG</b> to save it.'],
faq:[['Does the QR code expire?','No. The code simply contains your text, so it works forever.'],['Can I put a WhatsApp link in it?','Yes. Paste any link, such as https://wa.me/your-number, and people can scan it to chat with you.']]});
})(AIO);
