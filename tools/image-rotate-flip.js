(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-rotate-flip",{cat:"image",ic:"🔄",t:"Image Rotate and Flip",d:"Rotate a photo 90, 180 or 270 degrees or flip it left to right or top to bottom.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><label>Action</label><select id="a"><option value="r90">Rotate 90° right</option><option value="r270">Rotate 90° left</option><option value="r180">Rotate 180°</option><option value="fh">Flip horizontal</option><option value="fv">Flip vertical</option></select><button id="go" type="button">Apply</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;if(false)go()})};
function go(){if(!im0){alert('Choose an image first.');return}
var c=document.createElement('canvas'),x=c.getContext('2d'),im=im0;
var a=$('a').value,w=im.naturalWidth,h=im.naturalHeight,sw=(a==='r90'||a==='r270');c.width=sw?h:w;c.height=sw?w:h;x.translate(c.width/2,c.height/2);if(a==='r90')x.rotate(Math.PI/2);else if(a==='r270')x.rotate(-Math.PI/2);else if(a==='r180')x.rotate(Math.PI);else if(a==='fh')x.scale(-1,1);else x.scale(1,-1);x.drawImage(im,-w/2,-h/2);
var T="image/png";c.toBlob(function(b){showImg(b,"image-result"+'.'+(T==='image/png'?'png':T==='image/webp'?'webp':'jpg'),'Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},T,($('q')?$('q').value/100:0.92))}
$('go').onclick=go;
},
how:["Choose your photo.","Pick rotate or flip.","Press Apply and download the new image."],
faq:[["Does it lower quality?","Rotating by 90 degrees keeps all pixels. The result is saved as a PNG."],["Why is my phone photo sideways?","Some phones store rotation in hidden data. Rotate here to fix it."]]});
})(AIO);
