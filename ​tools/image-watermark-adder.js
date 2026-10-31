(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-watermark-adder",{cat:"image",ic:"💧",t:"Add Watermark to Image",d:"Put your own text watermark on a photo.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><input id="wt" placeholder="Watermark text" value="AioFly"><div class="row"><label>Position <select id="ps"><option value="br">Bottom right</option><option value="bl">Bottom left</option><option value="ct">Center</option><option value="tl">Top left</option><option value="tr">Top right</option></select></label><label>Size <select id="sz"><option value="0.04">Small</option><option value="0.06" selected>Medium</option><option value="0.09">Large</option></select></label></div><button id="go" type="button">Apply</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;
$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;if(false)go()})};
function go(){if(!im0){alert('Choose an image first.');return}
var c=document.createElement('canvas'),x=c.getContext('2d'),im=im0;
c.width=im.naturalWidth;c.height=im.naturalHeight;x.drawImage(im,0,0);var fs=Math.max(14,Math.round(c.width*parseFloat($('sz').value))),m=fs*.6,p=$('ps').value;x.font='bold '+fs+'px sans-serif';x.fillStyle='rgba(255,255,255,.8)';x.strokeStyle='rgba(0,0,0,.55)';x.lineWidth=Math.max(2,fs/10);x.textBaseline='middle';var tw=x.measureText($('wt').value).width,px=p[1]==='r'?c.width-tw-m:p[1]==='l'?m:(c.width-tw)/2,py=p[0]==='b'?c.height-fs:p[0]==='t'?fs:c.height/2;if(p==='ct'){px=(c.width-tw)/2;py=c.height/2}x.strokeText($('wt').value,px,py);x.fillText($('wt').value,px,py);
var T="image/jpeg";c.toBlob(function(b){showImg(b,"image-result"+'.'+(T==='image/png'?'png':T==='image/webp'?'webp':'jpg'),'Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},T,($('q')?$('q').value/100:0.92))}
$('go').onclick=go;
},
how:["Choose your photo.","Type your watermark text and pick a position.","Press Apply and download."],
faq:[["Can I remove it later?","The watermark is burned into the new copy. Keep your original photo."],["Does it work for logos?","This tool adds text only."]]});
})(AIO);
