(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('lorem-ipsum-generator',{cat:'text',ic:'📝',t:'Lorem Ipsum Generator',d:'Create dummy text for designs, websites and mockups.',
h:`<div class="row"><div><label>Paragraphs</label><input type="number" id="n" min="1" max="20" value="3"></div>
<div><label>Sentences per paragraph</label><input type="number" id="s" min="1" max="12" value="5"></div></div>
<label class="ck"><input type="checkbox" id="st" checked>Start with "Lorem ipsum dolor sit amet"</label><br>
<button id="go" type="button">Generate</button><button id="cp" type="button">Copy</button>
<textarea id="o" style="min-height:220px"></textarea>`,
f:function(){
  var W='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum'.split(' ');
  function sent(){var n=6+rnd(10),a=[];for(var i=0;i<n;i++){a.push(W[rnd(W.length)])}var s=a.join(' ');return s.charAt(0).toUpperCase()+s.slice(1)+'.'}
  $('go').onclick=function(){
    var n=Math.min(20,Math.max(1,parseInt($('n').value)||1)),s=Math.min(12,Math.max(1,parseInt($('s').value)||1)),ps=[];
    for(var i=0;i<n;i++){var a=[];for(var j=0;j<s;j++){a.push(sent())}ps.push(a.join(' '))}
    if($('st').checked){ps[0]='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+ps[0]}
    $('o').value=ps.join('\n\n');
  };
  $('cp').onclick=function(){copyText($('o').value,this)};
  $('go').onclick();
},
how:['Choose how many paragraphs and sentences you need.','Press <b>Generate</b>.','Press <b>Copy</b> and paste it into your design.'],
faq:[['What is Lorem Ipsum?','It is placeholder text used by designers to show how a page will look before the real writing is ready.'],['Is it random?','Yes. Each click creates new random text from Latin-style words.']]});
})(AIO);
