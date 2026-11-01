(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("circle-image-cropper",{cat:"image",ic:"⭕",t:"Circle Image Cropper",d:"Crop any photo into a perfect circle with a transparent background. Great for profile pictures.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><label>Output size (px)</label><select id="sz"><option>256</option><option selected>512</option><option>1024</option></select><label><input type="checkbox" id="bd"> Add white border</label><button id="go" type="button">Make circle</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;go()})};
function go(){if(!im0){alert('Choose an image first.');return}var S=+$('sz').value,c=document.createElement('canvas'),x=c.getContext('2d');c.width=c.height=S;var s=Math.max(S/im0.width,S/im0.height),w=im0.width*s,h=im0.height*s;
x.save();x.beginPath();x.arc(S/2,S/2,S/2,0,7);x.clip();x.drawImage(im0,(S-w)/2,(S-h)/2,w,h);x.restore();
if($('bd').checked){x.lineWidth=S*0.03;x.strokeStyle='#fff';x.beginPath();x.arc(S/2,S/2,S/2-S*0.015,0,7);x.stroke()}
c.toBlob(function(b){showImg(b,'circle-image.png','Size: <b>'+S+' x '+S+' px</b> ('+kb(b.size)+' KB)<br><br>')},'image/png')}
$('go').onclick=go;
},
how:["Choose a photo.","Pick the size and an optional border.","Press <b>Make circle</b> and save the PNG."],
faq:[["Is the background transparent?","Yes. The area outside the circle is transparent in the PNG file."],["Which part of the photo is kept?","The center of the photo is used. Choose a photo where the face is near the middle."]]});
})(AIO);
