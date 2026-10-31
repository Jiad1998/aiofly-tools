(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("image-to-base64",{cat:"image",ic:"🧬",t:"Image to Base64 Converter",d:"Turn an image into Base64 text or a data URL for web pages and CSS.",
h:`<label>Choose image</label><input type="file" id="f" accept="image/*"><div class="res" id="s"></div><textarea id="o" readonly placeholder="Base64 appears here"></textarea><div class="row"><button id="cp" type="button">Copy data URL</button><button id="cr" type="button">Copy Base64 only</button></div>`,
f:function(){
var d='';$('f').onchange=function(){var f=this.files[0];if(!f)return;if(f.size>5*1048576){alert('Please choose an image under 5 MB.');return}var r=new FileReader();r.onload=function(){d=r.result;$('o').value=d;$('s').innerHTML='Size: <b>'+kb(f.size)+' KB</b> as text: <b>'+kb(d.length)+' KB</b>'};r.readAsDataURL(f)};
$('cp').onclick=function(){if(d)copyText(d,$('cp'))};$('cr').onclick=function(){if(d)copyText(d.split(',')[1],$('cr'))};
},
how:["Choose an image under 5 MB.","The Base64 text appears at once.","Copy the full data URL or only the Base64 part."],
faq:[["What is Base64 used for?","It lets you place a small image directly inside HTML, CSS or JSON without a separate file."],["Why is the text bigger than the image?","Base64 makes data about one third larger."]]});
})(AIO);
