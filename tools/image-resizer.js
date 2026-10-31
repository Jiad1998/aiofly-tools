(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('image-resizer',{cat:'image',ic:'📐',t:'Image Resizer',d:'Change the width and height of any image in pixels.',
h:`<label>Choose image</label><input type="file" id="f" accept="image/*">
<div class="row"><div><label>Width (px)</label><input type="number" id="w" min="1"></div><div><label>Height (px)</label><input type="number" id="h" min="1"></div></div>
<label class="ck"><input type="checkbox" id="k" checked>Keep aspect ratio</label>
<label>Output format</label><select id="t"><option value="image/jpeg">JPG</option><option value="image/png">PNG</option></select>
<button id="go" type="button">Resize</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  var im0=null,ratio=1;
  $('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;ratio=im.naturalWidth/im.naturalHeight;$('w').value=im.naturalWidth;$('h').value=im.naturalHeight})};
  $('w').oninput=function(){if($('k').checked&&this.value)$('h').value=Math.round(this.value/ratio)};
  $('h').oninput=function(){if($('k').checked&&this.value)$('w').value=Math.round(this.value*ratio)};
  $('go').onclick=function(){
    if(!im0){alert('Choose an image first.');return}
    var w=parseInt($('w').value),h=parseInt($('h').value);
    if(!w||!h||w>8000||h>8000){alert('Enter a width and height between 1 and 8000.');return}
    var c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d'),t=$('t').value;
    if(t==='image/jpeg'){x.fillStyle='#fff';x.fillRect(0,0,w,h)}
    x.drawImage(im0,0,0,w,h);
    c.toBlob(function(b){showImg(b,'resized.'+(t==='image/png'?'png':'jpg'),'New size: <b>'+w+' x '+h+' px</b> ('+kb(b.size)+' KB)<br><br>')},t,0.92);
  };
},
how:['Choose an image. Its size appears automatically.','Type a new width or height. Keep aspect ratio ticked to avoid stretching.','Press <b>Resize</b> and download the new image.'],
faq:[['Will resizing reduce quality?','Making an image smaller keeps it sharp. Making it much bigger can look soft because new pixels must be guessed.'],['What does keep aspect ratio mean?','The width and height change together so the picture does not look squeezed or stretched.']]});
})(AIO);
