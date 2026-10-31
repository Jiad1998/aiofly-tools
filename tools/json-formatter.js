(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('json-formatter',{cat:'dev',ic:'{ }',t:'JSON Formatter',d:'Format, minify and validate JSON data.',
h:`<textarea id="t" style="min-height:220px;font-family:monospace" placeholder='{"name":"AioFly","tools":21}'></textarea>
<button id="f" type="button">Format</button><button id="m" type="button">Minify</button><button id="v" type="button">Validate</button><button id="cp" type="button">Copy</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  var t=$('t'),o=$('o');
  function msg(s,ok){o.style.display='block';o.style.background=ok?'#dcfce7':'#fee2e2';o.style.color='#111827';o.textContent=s}
  function run(kind){
    try{
      var j=JSON.parse(t.value);
      if(kind==='f'){t.value=JSON.stringify(j,null,2);msg('Valid JSON. Formatted.',true)}
      else if(kind==='m'){t.value=JSON.stringify(j);msg('Valid JSON. Minified.',true)}
      else{msg('Valid JSON.',true)}
    }catch(e){msg('Invalid JSON: '+e.message,false)}
  }
  $('f').onclick=function(){run('f')};$('m').onclick=function(){run('m')};$('v').onclick=function(){run('v')};
  $('cp').onclick=function(){copyText(t.value,this)};
},
how:['Paste your JSON into the box.','Press <b>Format</b> to make it easy to read, <b>Minify</b> to make it small, or <b>Validate</b> to check it.','Press <b>Copy</b> to use the result.'],
faq:[['What does the error message mean?','It points to the place where the JSON is broken, such as a missing comma or quote.'],['Is my data sent to a server?','No. Everything runs inside your browser.']]});
})(AIO);
