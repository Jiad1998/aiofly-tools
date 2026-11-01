(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("art-qr-code-generator",{cat:"gen",ic:"🎨",t:"Art QR Code Generator",d:"Turn any photo into a stylish QR code. The image shows behind the code.",
h:`<label>Text or link</label><textarea id="t" style="min-height:80px" placeholder="https://example.com"></textarea><label>Background photo</label><input type="file" id="f" accept="image/*"><label>Photo strength: <b id="sv">45</b>%</label><input type="range" id="s" min="15" max="80" value="45"><div class="row"><label style="flex:1 1 130px">Dot color<input type="color" id="c" value="#0b1b3a"></label><label style="flex:1 1 130px">Dot style<select id="st"><option value="sq">Square</option><option value="dot">Round dots</option></select></label></div><button id="go" type="button">Create Art QR</button><div class="res" id="o" style="display:none"><canvas id="cv" style="max-width:100%;height:auto"></canvas><br><button id="dl" type="button">⬇ Download PNG</button></div>`,
f:function(){
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}function qrModules(text,cb){lib('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',function(){return typeof QRCode!=='undefined'},function(ok){if(!ok){alert('The QR engine could not load. Please check your internet.');return}
var d=document.createElement('div');var q=new QRCode(d,{text:text,width:10,height:10,correctLevel:QRCode.CorrectLevel.H});var m=q._oQRCode;cb(m)})}
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function cover(x,im,W,H){var s=Math.max(W/im.width,H/im.height),w=im.width*s,h=im.height*s;x.drawImage(im,(W-w)/2,(H-h)/2,w,h)}
var im0=null;$('s').oninput=function(){$('sv').textContent=this.value};
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im})};
$('go').onclick=function(){var t=$('t').value.trim();if(!t){alert('Enter a link or text first.');return}if(!im0){alert('Choose a background photo first.');return}
qrModules(t,function(m){var n=m.getModuleCount(),cell=Math.max(6,Math.floor(720/(n+4))),S=(n+4)*cell,cv=$('cv');cv.width=cv.height=S;var x=cv.getContext('2d');
cover(x,im0,S,S);x.fillStyle='rgba(255,255,255,'+(1-$('s').value/100)+')';x.fillRect(0,0,S,S);
x.fillStyle=$('c').value;var dot=$('st').value==='dot';
function fin(r,c){return (r<8&&c<8)||(r<8&&c>=n-8)||(r>=n-8&&c<8)}
for(var r=0;r<n;r++)for(var c=0;c<n;c++)if(m.isDark(r,c)){var px=(c+2)*cell,py=(r+2)*cell;
if(dot&&!fin(r,c)){x.beginPath();x.arc(px+cell/2,py+cell/2,cell*0.46,0,7);x.fill()}else x.fillRect(px,py,cell,cell)}
$('o').style.display='block'})};
$('dl').onclick=function(){$('cv').toBlob(function(b){dl(b,'art-qr-code.png')})};
},
how:["Type your link or text.","Choose a photo. It will appear behind the QR dots.","Adjust photo strength, press <b>Create Art QR</b> and download."],
faq:[["Does an Art QR code scan?","Usually yes, but a very bright photo can make scanning harder. Lower the photo strength or use a darker dot color, and always test with your phone."],["What photo works best?","Photos with simple, soft backgrounds work best."],["Can I use it for printing?","Yes. Download the PNG and print it. Test before printing many copies."]]});
})(AIO);
