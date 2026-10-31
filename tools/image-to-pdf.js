(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('image-to-pdf',{cat:'pdf',ic:'📄',t:'Image to PDF',d:'Combine one or more photos into a single PDF file.',
h:`<label>Choose images (you can select many)</label><input type="file" id="f" accept="image/*" multiple>
<button id="go" type="button">Create PDF</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  $('go').onclick=function(){
    var files=$('f').files,o=$('o');
    if(!files.length){alert('Please choose at least one image.');return}
    o.style.display='block';o.textContent='Loading PDF engine...';
    lib('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',function(){return window.jspdf},function(ok){
      if(!ok){o.textContent='Could not load the PDF engine. Please check your internet and try again.';return}
      var doc=new window.jspdf.jsPDF({unit:'mm',format:'a4'}),i=0;
      function next(){
        if(i>=files.length){doc.save('images.pdf');o.innerHTML='<span class="ok">Done!</span> Your PDF ('+files.length+' page'+(files.length>1?'s':'')+') has been downloaded.';return}
        o.textContent='Adding image '+(i+1)+' of '+files.length+'...';
        loadImg(files[i],function(im){
          var m=Math.min(1,2000/Math.max(im.naturalWidth,im.naturalHeight)),cw=Math.round(im.naturalWidth*m),ch=Math.round(im.naturalHeight*m);
          var c=document.createElement('canvas');c.width=cw;c.height=ch;
          var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,cw,ch);x.drawImage(im,0,0,cw,ch);
          var r=Math.min(190/cw,277/ch),w=cw*r,h=ch*r;
          if(i>0){doc.addPage()}
          doc.addImage(c.toDataURL('image/jpeg',0.85),'JPEG',(210-w)/2,(297-h)/2,w,h);
          i++;setTimeout(next,0);
        });
      }
      next();
    });
  };
},
how:['Choose one or many images. They become pages in the order you select them.','Press <b>Create PDF</b>.','Your PDF downloads automatically.'],
faq:[['Can I make a PDF from many photos?','Yes. Select several images at once and each one becomes its own A4 page.'],['Are my images uploaded?','No. The PDF is created on your device. Only the small PDF library is loaded from the internet.']]});
})(AIO);
