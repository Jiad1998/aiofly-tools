(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-border-adder",{cat:"image",ic:"🖼️",t:"Image Border Adder",d:"Add a colored frame around any photo.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><div class="row"><label style="flex:1 1 120px">Border color<input type="color" id="c" value="#ffffff"></label><label style="flex:1 1 120px">Border size %<input type="number" id="s" value="5" min="1" max="30"></label></div><button id="go" type="button">Add border</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;go()})};
function go(){if(!im0){alert('Choose an image first.');return}var b=Math.round(Math.max(im0.width,im0.height)*$('s').value/100),c=document.createElement('canvas'),x=c.getContext('2d');c.width=im0.width+2*b;c.height=im0.height+2*b;x.fillStyle=$('c').value;x.fillRect(0,0,c.width,c.height);x.drawImage(im0,b,b);
c.toBlob(function(bl){showImg(bl,'border-image.png','Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(bl.size)+' KB)<br><br>')},'image/png')}
$('go').onclick=go;
},
how:["Choose a photo.","Pick a border color and size.","Press <b>Add border</b> and save the image."],
faq:[["Can I use a black border?","Yes. Choose any color you like with the color box."]]});
})(AIO);
