(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-on-image",{cat:"image",ic:"🔤",t:"Add Text to Image",d:"Write a caption or quote on any photo. Choose font size, color and position.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><label>Your text</label><textarea id="t" style="min-height:70px">Your text here</textarea><div class="row"><label style="flex:1 1 120px">Text color<input type="color" id="c" value="#ffffff"></label><label style="flex:1 1 120px">Size %<input type="number" id="s" value="8" min="2" max="30"></label><label style="flex:1 1 120px">Position<select id="p"><option value="b">Bottom</option><option value="m">Middle</option><option value="t">Top</option></select></label></div><label><input type="checkbox" id="sh" checked> Add dark outline</label><button id="go" type="button">Add text</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null;$('f').onchange=function(){var f=this.files[0];if(!f)return;loadImg(f,function(im){im0=im;go()})};
function go(){if(!im0){alert('Choose an image first.');return}var c=document.createElement('canvas'),x=c.getContext('2d');c.width=im0.width;c.height=im0.height;x.drawImage(im0,0,0);
var fs=Math.round(c.width*($('s').value/100));x.font='bold '+fs+'px Arial,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillStyle=$('c').value;x.lineJoin='round';x.lineWidth=fs/6;x.strokeStyle='rgba(0,0,0,.85)';
var words=$('t').value.split('\n'),lines=[];words.forEach(function(w){var cur='';w.split(' ').forEach(function(wd){var tt=cur?cur+' '+wd:wd;if(x.measureText(tt).width>c.width*0.92&&cur){lines.push(cur);cur=wd}else cur=tt});lines.push(cur)});
var lh=fs*1.2,tot=lines.length*lh,y0=$('p').value==='t'?fs*0.4+lh/2:$('p').value==='m'?(c.height-tot)/2+lh/2:c.height-tot-fs*0.4+lh/2;
lines.forEach(function(l,i){var y=y0+i*lh;if($('sh').checked)x.strokeText(l,c.width/2,y);x.fillText(l,c.width/2,y)});
c.toBlob(function(b){showImg(b,'text-image.png','Size: <b>'+c.width+' x '+c.height+' px</b> ('+kb(b.size)+' KB)<br><br>')},'image/png')}
$('go').onclick=go;
},
how:["Choose a photo.","Type your text and set color, size and position.","Press <b>Add text</b>, then save the image."],
faq:[["Can I write more than one line?","Yes. Press Enter for a new line. Long lines also wrap automatically."],["Does it work with Bangla or Hindi text?","Yes, if your phone has a font for that language. The text is drawn with your device fonts."]]});
})(AIO);
