(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('word-counter',{cat:'text',ic:'🔤',t:'Word Counter',d:'Count words, characters, sentences and paragraphs. Works for English and Bangla.',
h:`<textarea id="t" placeholder="Type or paste your text here..."></textarea>
<div class="res" id="o"></div>
<button id="cl" type="button">Clear</button>`,
f:function(){
  function upd(){
    var s=$('t').value,tr=s.trim();
    var w=tr?tr.split(/\s+/).length:0,ch=s.length,nos=s.replace(/\s/g,'').length;
    var se=s.split(/[.!?।]+/).filter(function(x){return x.trim()}).length;
    var pa=s.split(/\n+/).filter(function(x){return x.trim()}).length;
    $('o').innerHTML='Words: <b>'+w+'</b><br>Characters: <b>'+ch+'</b><br>Characters (no spaces): <b>'+nos+'</b><br>Sentences: <b>'+se+'</b><br>Paragraphs: <b>'+pa+'</b><br>Reading time: <b>'+(w?Math.max(1,Math.ceil(w/200)):0)+' min</b>';
  }
  $('t').oninput=upd;$('cl').onclick=function(){$('t').value='';upd()};upd();
},
how:['Type or paste your text into the box.','The numbers update instantly as you type.','Press <b>Clear</b> to start again.'],
faq:[['Does it count Bangla words?','Yes. Words are counted by spaces, and the Bangla danda (।) is counted as the end of a sentence.'],['How is reading time calculated?','We assume an average reading speed of 200 words per minute.']]});
})(AIO);
