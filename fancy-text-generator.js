(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('fancy-text-generator',{cat:'social',ic:'✨',t:'Fancy Text Generator',d:'Turn normal text into stylish text for Instagram, Facebook and TikTok bios.',
h:`<input type="text" id="t" placeholder="Type your text here" value="AioFly"><div id="o"></div>`,
f:function(){
  var S=[['Bold',0x1D400,0x1D41A,0x1D7CE,{}],['Italic',0x1D434,0x1D44E,0,{h:'ℎ'}],['Bold Italic',0x1D468,0x1D482,0,{}],['Bold Script',0x1D4D0,0x1D4EA,0,{}],['Bold Fraktur',0x1D56C,0x1D586,0,{}],['Double-struck',0x1D538,0x1D552,0x1D7D8,{C:'ℂ',H:'ℍ',N:'ℕ',P:'ℙ',Q:'ℚ',R:'ℝ',Z:'ℤ'}],['Sans Bold',0x1D5D4,0x1D5EE,0x1D7EC,{}],['Monospace',0x1D670,0x1D68A,0x1D7F6,{}],['Circled',0x24B6,0x24D0,0,{}]];
  function map(s,st){
    var r='';
    for(var i=0;i<s.length;i++){
      var c=s.charAt(i),code=s.charCodeAt(i);
      if(st[4][c]){r+=st[4][c]}
      else if(code>=65&&code<=90){r+=String.fromCodePoint(st[1]+code-65)}
      else if(code>=97&&code<=122){r+=String.fromCodePoint(st[2]+code-97)}
      else if(code>=48&&code<=57&&st[3]){r+=String.fromCodePoint(st[3]+code-48)}
      else{r+=c}
    }
    return r;
  }
  function draw(){
    var s=$('t').value,o=$('o');o.innerHTML='';
    S.forEach(function(st){
      var v=map(s,st),d=document.createElement('div');d.className='box';
      var p=document.createElement('div');p.style.fontSize='20px';p.style.wordBreak='break-word';p.textContent=v;
      var b=document.createElement('button');b.type='button';b.textContent='Copy';b.onclick=function(){copyText(v,b)};
      d.appendChild(p);d.appendChild(b);o.appendChild(d);
    });
  }
  $('t').oninput=draw;draw();
},
how:['Type your name or any English text.','Scroll through the styles and find one you like.','Press <b>Copy</b> and paste it into your bio, caption or username.'],
faq:[['Why do some styles show boxes?','A few older phones cannot display special letters. Try another style if that happens.'],['Does it work for Bangla?','No. These styles work only for English letters and numbers.']]});
})(AIO);
