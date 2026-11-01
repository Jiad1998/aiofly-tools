(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-format-converter",{cat:"image",ic:"🔀",t:"Image Format Converter",d:"Convert any image to JPG, PNG or WebP in one tap.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><label>Convert to</label><select id="fm"><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option></select><label>Quality: <b id="qv">90</b>%</label><input type="range" id="q" min="30" max="100" value="90"><button id="go" type="button">Convert</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;$('q').oninput=function(){$('qv').textContent=this.value};$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im})};
$('go').onclick=function(){if(!im0){alert('Choose an image first.');return}var c=document.createElement('canvas'),x=c.getContext('2d'),T=$('fm').value;c.width=im0.width;c.height=im0.height;if(T==='image/jpeg'){x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height)}x.drawImage(im0,0,0);
c.toBlob(function(b){showImg(b,'converted.'+(T==='image/png'?'png':T==='image/webp'?'webp':'jpg'),'Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},T,$('q').value/100)};
},
how:["Choose your image.","Select JPG, PNG or WebP.","Press <b>Convert</b> and save the new file."],
faq:[["Which format is best?","JPG is best for photos, PNG for logos and clear backgrounds, WebP for small file size on websites."],["Will transparent areas turn white in JPG?","Yes. JPG has no transparency, so transparent areas become white."]]});
})(AIO);
