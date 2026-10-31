(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-size-reducer-to-kb",{cat:"image",ic:"🗜️",t:"Image Size Reducer to KB",d:"Make a photo smaller than an exact size like 50 KB or 100 KB for online forms.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><div class="row"><label>Target size (KB)<input type="number" id="k" value="100" min="5"></label><label>Format <select id="t"><option value="image/jpeg">JPG</option><option value="image/webp">WebP</option></select></label></div><button id="go" type="button">Reduce size</button><div class="res" id="o" style="display:none"></div>`,
f:function(){
var im0=null,fname='';
$('f').onchange=function(){var f=this.files[0];if(!f)return;fname=f.name;loadImg(f,function(im){im0=im})};
function enc(c,t,q){return new Promise(function(r){c.toBlob(r,t,q)})}
async function fit(w,h,t,max){var c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(im0,0,0,w,h);
var lo=.05,hi=.95,best=null;var b=await enc(c,t,hi);if(b.size<=max)return b;
for(var i=0;i<8;i++){var mid=(lo+hi)/2;b=await enc(c,t,mid);if(b.size<=max){best=b;lo=mid}else hi=mid}return best}
$('go').onclick=async function(){if(!im0){alert('Choose an image first.');return}
var max=(parseFloat($('k').value)||0)*1024;if(max<2048){alert('Enter a target of at least 2 KB.');return}
var t=$('t').value,sc=1,res=null;$('go').disabled=true;
for(var i=0;i<10&&!res;i++){var w=Math.max(16,Math.round(im0.naturalWidth*sc)),h=Math.max(16,Math.round(im0.naturalHeight*sc));res=await fit(w,h,t,max);if(!res)sc*=.8}
$('go').disabled=false;if(!res){alert('Could not reach this size. Try a bigger target.');return}
showImg(res,'reduced.'+(t==='image/webp'?'webp':'jpg'),'New size: <b>'+kb(res.size)+' KB</b> (target '+kb(max)+' KB)<br><br>')};
},
how:["Choose your photo.","Type the size limit in KB, for example 100.","Press Reduce size and download the new photo."],
faq:[["Why do forms ask for a size in KB?","Many government and job sites accept only small files, such as photos under 100 KB."],["Will it look bad?","The tool lowers quality only as much as needed. Very small limits may also shrink the picture size."]]});
})(AIO);
