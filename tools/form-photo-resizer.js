(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("form-photo-resizer",{cat:"image",ic:"🪪",t:"Form Photo and Signature Resizer",d:"Resize a photo or signature to the exact pixel size and KB limit that online forms ask for.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><div class="row"><label>Preset <select id="p"><option value="300x300">Photo 300 x 300 px</option><option value="413x531">Passport 35x45 mm (413 x 531 px)</option><option value="300x80">Signature 300 x 80 px</option><option value="354x472">Photo 3 x 4 cm (354 x 472 px)</option><option value="c">Custom size</option></select></label></div><div class="row"><label>Width (px)<input type="number" id="w" value="300"></label><label>Height (px)<input type="number" id="h" value="300"></label><label>Max KB (optional)<input type="number" id="k" value="100"></label></div><button id="go" type="button">Make photo</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;
$('p').onchange=function(){var v=this.value;if(v!=='c'){var a=v.split('x');$('w').value=a[0];$('h').value=a[1]}};
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im})};
function enc(c,t,q){return new Promise(function(r){c.toBlob(r,t,q)})}
$('go').onclick=async function(){if(!im0){alert('Choose an image first.');return}
var w=parseInt($('w').value,10),h=parseInt($('h').value,10),max=(parseFloat($('k').value)||0)*1024;if(!w||!h||w>4000||h>4000){alert('Enter a width and height between 1 and 4000.');return}
var c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);
var s=Math.max(w/im0.naturalWidth,h/im0.naturalHeight),dw=im0.naturalWidth*s,dh=im0.naturalHeight*s;x.drawImage(im0,(w-dw)/2,(h-dh)/2,dw,dh);
var b=await enc(c,'image/jpeg',.95);if(max>=2048&&b.size>max){var lo=.05,hi=.95,best=null;for(var i=0;i<8;i++){var mid=(lo+hi)/2,bb=await enc(c,'image/jpeg',mid);if(bb.size<=max){best=bb;lo=mid}else hi=mid}b=best||bb}
showImg(b,'form-photo.jpg','Size: <b>'+w+' x '+h+' px</b> ('+kb(b.size)+' KB)<br><br>')};
},
how:["Choose your photo or signature.","Pick a preset or type your own width, height and maximum KB.","Press Make photo and download it."],
faq:[["Does it crop my photo?","Yes. It fills the exact size and trims the edges evenly from the center."],["What size does my form need?","Check the instructions of your form and use Custom size if it is different from the presets."]]});
})(AIO);
