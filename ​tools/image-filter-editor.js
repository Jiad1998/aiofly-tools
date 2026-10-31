(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-filter-editor",{cat:"image",ic:"🎞️",t:"Image Filter Editor",d:"Add grayscale, sepia, blur, brightness and contrast to photos.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><div class="row"><label>Filter <select id="fl"><option value="none">None</option><option value="grayscale(1)">Black and white</option><option value="sepia(1)">Sepia</option><option value="invert(1)">Invert</option><option value="blur(4px)">Blur</option></select></label></div><label>Brightness <input type="range" id="br" min="30" max="200" value="100"></label><label>Contrast <input type="range" id="co" min="30" max="200" value="100"></label><button id="go" type="button">Apply</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;if(false)go()})};
function go(){if(!im0){alert('Choose an image first.');return}
var c=document.createElement('canvas'),x=c.getContext('2d'),im=im0;
c.width=im.naturalWidth;c.height=im.naturalHeight;var fl=$('fl').value;x.filter='brightness('+$('br').value+'%) contrast('+$('co').value+'%) '+(fl==='none'?'':fl);x.drawImage(im,0,0);
var T="image/jpeg";c.toBlob(function(b){showImg(b,"image-result"+'.'+(T==='image/png'?'png':T==='image/webp'?'webp':'jpg'),'Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},T,($('q')?$('q').value/100:0.92))}
$('go').onclick=go;
},
how:["Choose a photo.","Pick a filter and move the sliders.","Press Apply and download."],
faq:[["Which filter makes a black and white photo?","Choose Black and white."],["Will the original file change?","No. Your original stays on your phone. You download a new copy."]]});
})(AIO);
