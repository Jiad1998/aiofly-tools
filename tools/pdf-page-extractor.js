(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pdf-page-extractor",{cat:"pdf",ic:"✂️",t:"PDF Page Extractor",d:"Pick pages from a PDF and save them as a new, smaller PDF.",
h:`<label>Choose a PDF</label><input type="file" id="f" accept="application/pdf"><div class="res" id="i"></div><label>Pages to keep (example: 1-3, 5, 8-10)</label><input type="text" id="r" placeholder="1-3, 5"><button id="go" type="button">Extract pages</button><div class="res" id="o"></div>`,
f:function(){
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}var file=null,total=0;
$('f').onchange=function(){file=this.files[0];$('i').textContent='';if(!file)return;lib('https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',function(){return typeof PDFLib!=='undefined'},function(ok){if(!ok){alert('PDF engine could not load. Check your internet.');return}(async function(){try{var d=await PDFLib.PDFDocument.load(await file.arrayBuffer(),{ignoreEncryption:true});total=d.getPageCount();$('i').innerHTML='This PDF has <b>'+total+' pages</b>.'}catch(e){$('i').textContent='Could not read this PDF.'}})()})};
$('go').onclick=function(){if(!file||!total){alert('Choose a PDF first.');return}
var keep=[],ok=true;$('r').value.split(',').forEach(function(p){p=p.trim();if(!p)return;var m=p.match(/^(\d+)\s*-\s*(\d+)$/);if(m){var a=+m[1],b=+m[2];if(a>b){var t=a;a=b;b=t}for(var k=a;k<=b;k++)keep.push(k)}else if(/^\d+$/.test(p))keep.push(+p);else ok=false});
keep=keep.filter(function(n){return n>=1&&n<=total});
if(!ok||!keep.length){alert('Please enter pages like 1-3, 5');return}
(async function(){try{var src=await PDFLib.PDFDocument.load(await file.arrayBuffer(),{ignoreEncryption:true});var out=await PDFLib.PDFDocument.create();var pg=await out.copyPages(src,keep.map(function(n){return n-1}));pg.forEach(function(p){out.addPage(p)});
var b=new Blob([await out.save()],{type:'application/pdf'});$('o').innerHTML='Done! New PDF has <b>'+keep.length+' pages</b>.<br><br><button id="d2" type="button">⬇ Download PDF</button>';$('d2').onclick=function(){dl(b,'extracted.pdf')}}catch(e){$('o').textContent='Something went wrong.'}})()};
},
how:["Choose your PDF. The page count is shown.","Type the pages you want, such as <b>1-3, 5</b>.","Press <b>Extract pages</b> and download the new PDF."],
faq:[["Can I delete pages with this tool?","Yes. Simply type the pages you want to keep, and every other page is left out."],["Does it reduce quality?","No. Pages are copied exactly as they are."]]});
})(AIO);
