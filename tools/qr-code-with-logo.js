(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("qr-code-with-logo",{cat:"gen",ic:"🏷️",t:"QR Code with Logo",d:"Make a QR code with your own logo in the center. Free, no sign-up.",
h:`<label>Text or link</label><textarea id="t" style="min-height:80px" placeholder="https://example.com"></textarea><label>Your logo (optional)</label><input type="file" id="f" accept="image/*"><div class="row"><label style="flex:1 1 130px">QR color<input type="color" id="c" value="#111111"></label><label style="flex:1 1 130px">Background<input type="color" id="b" value="#ffffff"></label></div><button id="go" type="button">Create QR Code</button><div class="res" id="o" style="display:none"><canvas id="cv" style="max-width:100%;height:auto"></canvas><br><button id="dl" type="button">⬇ Download PNG</button></div>`,
f:function(){
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}function qrModules(text,cb){lib('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',function(){return typeof QRCode!=='undefined'},function(ok){if(!ok){alert('The QR engine could not load. Please check your internet.');return}
var d=document.createElement('div');var q=new QRCode(d,{text:text,width:10,height:10,correctLevel:QRCode.CorrectLevel.H});var m=q._oQRCode;cb(m)})}
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function cover(x,im,W,H){var s=Math.max(W/im.width,H/im.height),w=im.width*s,h=im.height*s;x.drawImage(im,(W-w)/2,(H-h)/2,w,h)}
var logo=null;
$('f').onchange=function(){var f=this.files[0];if(!f){logo=null;return}loadImg(f,function(im){logo=im})};
$('go').onclick=function(){var t=$('t').value.trim();if(!t){alert('Enter a link or text first.');return}
qrModules(t,function(m){var n=m.getModuleCount(),cell=Math.max(6,Math.floor(720/(n+8))),S=(n+8)*cell,cv=$('cv');cv.width=cv.height=S;var x=cv.getContext('2d');
x.fillStyle=$('b').value;x.fillRect(0,0,S,S);x.fillStyle=$('c').value;
for(var r=0;r<n;r++)for(var c=0;c<n;c++)if(m.isDark(r,c))x.fillRect((c+4)*cell,(r+4)*cell,cell,cell);
if(logo){var L=Math.round(S*0.2),p=Math.round(L*0.12),o=(S-L)/2;x.fillStyle=$('b').value;rr(x,o-p,o-p,L+2*p,L+2*p,L*0.18);x.fill();
var s=Math.min(L/logo.width,L/logo.height),w=logo.width*s,h=logo.height*s;x.drawImage(logo,(S-w)/2,(S-h)/2,w,h)}
$('o').style.display='block'})};
$('dl').onclick=function(){$('cv').toBlob(function(b){dl(b,'qr-code-logo.png')})};
},
how:["Type your link or text.","Choose your logo image. Square logos work best.","Pick colors, press <b>Create QR Code</b>, then download it."],
faq:[["Will the QR code still scan with a logo?","Yes. The code uses the highest error correction, so a small logo in the center does not stop scanning. Test it with your phone before printing."],["Which logo size is best?","A simple, square logo with a clear background works best. The tool keeps it small on purpose."],["Is my logo uploaded?","No. Everything happens in your browser."]]});
})(AIO);
