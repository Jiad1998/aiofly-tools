(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pdf-merger",{cat:"pdf",ic:"🧩",t:"PDF Merger",d:"Combine several PDF files into one PDF. Works fully in your browser.",
h:`<label>Choose PDF files (select 2 or more)</label><input type="file" id="f" accept="application/pdf" multiple><div class="res" id="l"></div><button id="go" type="button">Merge PDFs</button><div class="res" id="o"></div>`,
f:function(){
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}var files=[];
$('f').onchange=function(){files=[].slice.call(this.files);$('l').innerHTML=files.map(function(f,i){return (i+1)+'. '+esc(f.name)+' ('+kb(f.size)+' KB)'}).join('<br>')};
$('go').onclick=function(){if(files.length<2){alert('Please choose at least 2 PDF files.');return}
lib('https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',function(){return typeof PDFLib!=='undefined'},function(ok){if(!ok){alert('PDF engine could not load. Check your internet.');return}
$('o').textContent='Merging...';
(async function(){try{var out=await PDFLib.PDFDocument.create();
for(var i=0;i<files.length;i++){var src=await PDFLib.PDFDocument.load(await files[i].arrayBuffer(),{ignoreEncryption:true});var pg=await out.copyPages(src,src.getPageIndices());pg.forEach(function(p){out.addPage(p)})}
var bytes=await out.save();var b=new Blob([bytes],{type:'application/pdf'});
$('o').innerHTML='Done! <b>'+out.getPageCount()+' pages</b> ('+kb(b.size)+' KB)<br><br><button id="d2" type="button">⬇ Download merged PDF</button>';
$('d2').onclick=function(){dl(b,'merged.pdf')}}catch(e){$('o').textContent='Could not merge. One file may be damaged or password-protected.'}})()})};
},
how:["Press the file box and select two or more PDF files.","Press <b>Merge PDFs</b>. The files are joined in the order you selected them.","Press <b>Download merged PDF</b> to save the result."],
faq:[["Are my PDFs uploaded anywhere?","No. The merging happens inside your own browser, so your files never leave your device."],["Can I merge password-protected PDFs?","No. Remove the password first, then merge the files."],["Is there a page limit?","There is no fixed limit, but very large files may be slow on older phones."]]});
})(AIO);
