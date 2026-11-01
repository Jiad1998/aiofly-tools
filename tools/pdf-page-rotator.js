(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pdf-page-rotator",{cat:"pdf",ic:"🔄",t:"PDF Page Rotator",d:"Rotate every page of a PDF by 90, 180 or 270 degrees and save it.",
h:`<label>Choose a PDF</label><input type="file" id="f" accept="application/pdf"><label>Rotate by</label><select id="a"><option value="90">90° clockwise</option><option value="180">180°</option><option value="270">90° anticlockwise</option></select><button id="go" type="button">Rotate PDF</button><div class="res" id="o"></div>`,
f:function(){
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}var file=null;$('f').onchange=function(){file=this.files[0]};
$('go').onclick=function(){if(!file){alert('Choose a PDF first.');return}lib('https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',function(){return typeof PDFLib!=='undefined'},function(ok){if(!ok){alert('PDF engine could not load. Check your internet.');return}(async function(){try{var d=await PDFLib.PDFDocument.load(await file.arrayBuffer(),{ignoreEncryption:true});var a=+$('a').value;d.getPages().forEach(function(p){p.setRotation(PDFLib.degrees((p.getRotation().angle+a)%360))});
var b=new Blob([await d.save()],{type:'application/pdf'});$('o').innerHTML='Done!<br><br><button id="d2" type="button">⬇ Download rotated PDF</button>';$('d2').onclick=function(){dl(b,'rotated.pdf')}}catch(e){$('o').textContent='Could not rotate this PDF.'}})()})};
},
how:["Choose your PDF file.","Pick the rotation angle.","Press <b>Rotate PDF</b>, then download."],
faq:[["Does it rotate all pages?","Yes, all pages are rotated by the same angle."],["Is the text still selectable?","Yes. Only the page orientation changes."]]});
})(AIO);
