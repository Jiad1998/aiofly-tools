(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('image-compressor',{cat:'image',ic:'🗜️',t:'Image Compressor',d:'Make photos smaller in size. Works in your browser, nothing is uploaded.',
h:`<label>Choose image</label><input type="file" id="f" accept="image/*">
<label>Quality: <span id="qv">70</span>%</label><input type="range" id="q" min="10" max="95" value="70">
<button id="go" type="button">Compress</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  var q=$('q');q.oninput=function(){$('qv').textContent=q.value};
  $('go').onclick=function(){
    var file=$('f').files[0];if(!file){alert('Please choose an image.');return}
    loadImg(file,function(im){
      var c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;
      var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0);
      c.toBlob(function(b){
        var s=Math.round((1-b.size/file.size)*100);
        showImg(b,'compressed.jpg','Original: <b>'+kb(file.size)+' KB</b><br>Compressed: <b>'+kb(b.size)+' KB</b>'+(s>0?' <span class="ok">(saved '+s+'%)</span>':'<br><small>This image is already small. Try a lower quality.</small>')+'<br><br>');
      },'image/jpeg',q.value/100);
    });
  };
},
how:['Tap <b>Choose image</b> and pick a photo from your phone or computer.','Move the quality slider. Lower quality means a smaller file.','Press <b>Compress</b>, then <b>Download</b> the result.'],
faq:[['Is my photo uploaded to a server?','No. The photo is compressed inside your own browser and never leaves your device.'],['What quality should I choose?','Around 60-75% keeps photos looking good while cutting the size a lot. Use a lower value if a website needs a very small file.']]});
})(AIO);
