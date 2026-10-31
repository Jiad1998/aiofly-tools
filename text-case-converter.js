(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('text-case-converter',{cat:'text',ic:'Aa',t:'Text Case Converter',d:'Change text to UPPERCASE, lowercase, Title Case and more.',
h:`<textarea id="t" placeholder="Type or paste your text here..."></textarea>
<button id="u" type="button">UPPERCASE</button><button id="l" type="button">lowercase</button><button id="ti" type="button">Title Case</button><button id="se" type="button">Sentence case</button><button id="al" type="button">aLtErNaTe</button><button id="cp" type="button">Copy</button>`,
f:function(){
  var t=$('t');
  $('u').onclick=function(){t.value=t.value.toUpperCase()};
  $('l').onclick=function(){t.value=t.value.toLowerCase()};
  $('ti').onclick=function(){t.value=t.value.toLowerCase().replace(/(^|\s)(\S)/g,function(m,a,b){return a+b.toUpperCase()})};
  $('se').onclick=function(){t.value=t.value.toLowerCase().replace(/(^\s*|[.!?]\s+)(\S)/g,function(m,a,b){return a+b.toUpperCase()})};
  $('al').onclick=function(){var r='',n=0;for(var i=0;i<t.value.length;i++){var c=t.value.charAt(i);if(c.toLowerCase()!==c.toUpperCase()){r+=(n%2===0)?c.toLowerCase():c.toUpperCase();n++}else{r+=c}}t.value=r};
  $('cp').onclick=function(){copyText(t.value,this)};
},
how:['Paste or type your text.','Press the button for the style you want.','Press <b>Copy</b> and paste it anywhere.'],
faq:[['What is Title Case?','Each word starts with a capital letter, like a book title.'],['What is Sentence case?','Only the first letter of each sentence is a capital letter.']]});
})(AIO);
