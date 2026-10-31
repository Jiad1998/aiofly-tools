(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('jpg-png-converter',{cat:'image',ic:'🔄',t:'JPG / PNG Converter',d:'Convert images between JPG, PNG and WEBP formats.',
h:`<label>Choose image</label><input type="file" id="f" accept="image/*">
<label>Convert to</label><select id="t"><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WEBP</option></select>
<button id="go" type="button">Convert</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  $('go').onclick=function(){
    var file=$('f').files[0];if(!file){alert('Please choose an image.');return}
    var t=$('t').value,ext=t==='image/png'?'png':(t==='image/jpeg'?'jpg':'webp');
    loadImg(file,function(im){
      var c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;var x=c.getContext('2d');
      if(t==='image/jpeg'){x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height)}
      x.drawImage(im,0,0);
      c.toBlob(function(b){
        if(!b||b.type!==t){alert('Your browser cannot create this format. Please choose another.');return}
        showImg(b,'converted.'+ext,'Size: <b>'+kb(b.size)+' KB</b><br><br>');
      },t,0.92);
    });
  };
},
how:['Choose the image you want to change.','Pick the new format: PNG, JPG or WEBP.','Press <b>Convert</b> and download the file.'],
faq:[['Which format is best?','Use JPG for photos, PNG when you need a transparent background or sharp text, and WEBP for the smallest files on websites.'],['Is the conversion done online?','No. Everything happens inside your browser, so your pictures stay private.']]});
})(AIO);
