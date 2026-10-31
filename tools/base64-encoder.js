(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('base64-encoder',{cat:'dev',ic:'🔣',t:'Base64 Encode / Decode',d:'Convert text to Base64 and Base64 back to text.',
h:`<label>Input</label><textarea id="i" placeholder="Type or paste here..."></textarea>
<button id="e" type="button">Encode</button><button id="d" type="button">Decode</button>
<label>Output</label><textarea id="o"></textarea>
<button id="cp" type="button">Copy output</button>`,
f:function(){
  function enc(s){var b=new TextEncoder().encode(s),r='';for(var i=0;i<b.length;i++){r+=String.fromCharCode(b[i])}return btoa(r)}
  function dec(s){var r=atob(s.replace(/\s+/g,'')),b=new Uint8Array(r.length);for(var i=0;i<r.length;i++){b[i]=r.charCodeAt(i)}return new TextDecoder('utf-8',{fatal:true}).decode(b)}
  $('e').onclick=function(){try{$('o').value=enc($('i').value)}catch(e){$('o').value='Error: could not encode.'}};
  $('d').onclick=function(){try{$('o').value=dec($('i').value)}catch(e){$('o').value='Error: this is not valid Base64.'}};
  $('cp').onclick=function(){copyText($('o').value,this)};
},
how:['Paste your text or Base64 code into the input box.','Press <b>Encode</b> or <b>Decode</b>.','Press <b>Copy output</b>.'],
faq:[['What is Base64?','It is a way to write data using only letters and numbers so it can travel safely inside emails, links and web pages.'],['Does it support Bangla?','Yes. Bangla and other languages are encoded correctly using UTF-8.']]});
})(AIO);
