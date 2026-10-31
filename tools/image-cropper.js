(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-cropper",{cat:"image",ic:"✂️",t:"Image Cropper",d:"Crop a photo to square, 4:3, 16:9 or phone-screen shapes.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><label>Shape</label><select id="a"><option value="1">Square 1:1</option><option value="1.3333">4:3 landscape</option><option value="0.75">3:4 portrait</option><option value="1.7778">16:9 wide</option><option value="0.5625">9:16 story</option></select><label>Crop position</label><select id="ps"><option value="c">Center</option><option value="s">Start (top or left)</option><option value="e">End (bottom or right)</option></select><button id="go" type="button">Apply</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;if(false)go()})};
function go(){if(!im0){alert('Choose an image first.');return}
var c=document.createElement('canvas'),x=c.getContext('2d'),im=im0;
var r=parseFloat($('a').value),w=im.naturalWidth,h=im.naturalHeight,cw=w,ch=w/r;if(ch>h){ch=h;cw=h*r}var p=$('ps').value,sx=p==='c'?(w-cw)/2:p==='s'?0:w-cw,sy=p==='c'?(h-ch)/2:p==='s'?0:h-ch;c.width=Math.round(cw);c.height=Math.round(ch);x.drawImage(im,sx,sy,cw,ch,0,0,c.width,c.height);
var T="image/jpeg";c.toBlob(function(b){showImg(b,"image-result"+'.'+(T==='image/png'?'png':T==='image/webp'?'webp':'jpg'),'Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},T,($('q')?$('q').value/100:0.92))}
$('go').onclick=go;
},
how:["Choose a photo.","Pick the shape and which part to keep.","Press Apply and download."],
faq:[["Can I choose the exact area?","This tool crops to a shape. Use the position option to keep the top, middle or bottom."],["Does it reduce quality?","No. Only the extra edges are removed."]]});
})(AIO);
