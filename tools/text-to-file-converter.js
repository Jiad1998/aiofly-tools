(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-to-file-converter",{cat:"file",ic:"📄",t:"Text to File Converter",d:"Save your text as a .txt, .md, .csv, .json or .html file.",
h:`<textarea id="i" placeholder="Type or paste text..."></textarea><div class="row"><label>File name <input id="n" value="my-file"></label><label>Type <select id="t"><option value="txt">.txt</option><option value="md">.md</option><option value="csv">.csv</option><option value="json">.json</option><option value="html">.html</option></select></label></div><button id="go" type="button">⬇ Download file</button>`,
f:function(){
$('go').onclick=function(){var t=$('t').value,mt={txt:'text/plain',md:'text/markdown',csv:'text/csv',json:'application/json',html:'text/html'}[t],n=($('n').value.trim()||'file').replace(/[^\w\-. ]+/g,'_'),b=new Blob([$('i').value],{type:mt+';charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=n+'.'+t;document.body.appendChild(a);a.click();a.remove()}
},
how:["Type or paste your text.","Choose a file name and type.","Press Download."],
faq:[["Does it support Bangla?","Yes. Files are saved in UTF-8, so Bangla text works."],["Is the file uploaded anywhere?","No. It is made on your device."]]});
})(AIO);
