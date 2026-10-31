(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("color-picker-from-image",{cat:"color",ic:"💧",t:"Color Picker from Image",d:"Tap anywhere on a photo to get its HEX and RGB color code.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><div style="position:relative"><canvas id="cv" style="max-width:100%;border-radius:12px;display:none;cursor:crosshair;touch-action:none"></canvas></div><div class="res" id="o">Tap or drag on the picture to pick a color.</div>`,
f:function(){
var cv=$('cv'),x=cv.getContext('2d',{willReadFrequently:true});
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){var s=Math.min(1,900/im.naturalWidth);cv.width=Math.round(im.naturalWidth*s);cv.height=Math.round(im.naturalHeight*s);x.drawImage(im,0,0,cv.width,cv.height);cv.style.display='block'})};
function pick(e){var r=cv.getBoundingClientRect(),t=e.touches?e.touches[0]:e,px=Math.floor((t.clientX-r.left)*cv.width/r.width),py=Math.floor((t.clientY-r.top)*cv.height/r.height);if(px<0||py<0||px>=cv.width||py>=cv.height)return;var d=x.getImageData(px,py,1,1).data,hx='#'+[d[0],d[1],d[2]].map(function(v){return ('0'+v.toString(16)).slice(-2)}).join('').toUpperCase();
$('o').innerHTML='<span style="display:inline-block;width:40px;height:40px;border-radius:10px;vertical-align:middle;background:'+hx+';border:1px solid #888"></span> HEX: <b>'+hx+'</b> &nbsp; RGB: <b>'+d[0]+', '+d[1]+', '+d[2]+'</b> <button type="button" id="cc">Copy HEX</button>';$('cc').onclick=function(){copyText(hx,$('cc'))}}
cv.addEventListener('click',pick);cv.addEventListener('touchstart',function(e){pick(e)},{passive:true});cv.addEventListener('touchmove',function(e){pick(e)},{passive:true});
},
how:["Choose an image.","Tap or drag on the picture.","Copy the HEX code."],
faq:[["Is my photo uploaded?","No. The picture stays on your device."],["Why is the color slightly different?","Photos have shading and compression, so nearby pixels can vary a little."]]});
})(AIO);
