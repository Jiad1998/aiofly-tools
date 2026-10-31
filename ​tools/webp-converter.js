(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("webp-converter",{cat:"image",ic:"🌐",t:"Image to WebP Converter",d:"Convert JPG or PNG to the smaller WebP format.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><label>Quality <input type="range" id="q" min="40" max="100" value="85"></label><button id="go" type="button">Apply</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;if(false)go()})};
function go(){if(!im0){alert('Choose an image first.');return}
var c=document.createElement('canvas'),x=c.getContext('2d'),im=im0;
c.width=im.naturalWidth;c.height=im.naturalHeight;x.drawImage(im,0,0);
var T="image/webp";c.toBlob(function(b){showImg(b,"webp-result"+'.'+(T==='image/png'?'png':T==='image/webp'?'webp':'jpg'),'Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},T,($('q')?$('q').value/100:0.92))}
$('go').onclick=go;
},
how:["Choose a JPG or PNG.","Pick the quality.","Press Apply and download the WebP file."],
faq:[["Why use WebP?","WebP files are usually smaller than JPG at similar quality, so pages load faster."],["Do all browsers show WebP?","All modern browsers do."]]});
})(AIO);
