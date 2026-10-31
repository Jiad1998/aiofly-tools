(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('word-to-number-converter',{cat:'convert',ic:'🔢',t:'Word to Number Converter',d:'Turn English number words into digits, and digits into words. Example: one hundred twenty three = 123.',
h:`<div class="box"><b>Words to number</b><input type="text" id="w" placeholder="two thousand five hundred twenty">
<button id="g1" type="button">Convert to number</button><div class="res big" id="r1">-</div></div>
<div class="box"><b>Number to words</b><input type="text" id="d" placeholder="2520" inputmode="decimal">
<button id="g2" type="button">Convert to words</button><div class="res" id="r2">-</div></div>`,
f:function(){
  var U={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};
  var SC={thousand:1e3,million:1e6,billion:1e9,trillion:1e12};
  function w2n(s){
    var t=s.toLowerCase().replace(/[-,]/g,' ').split(/\s+/).filter(function(x){return x&&x!=='and'}),neg=false,tot=0,cur=0,dec='',inDec=false;
    if(!t.length)return null;
    if(t[0]==='minus'||t[0]==='negative'){neg=true;t.shift()}
    for(var i=0;i<t.length;i++){
      var x=t[i];
      if(x==='point'){inDec=true;continue}
      if(inDec){if(U[x]!==undefined&&U[x]<10){dec+=U[x]}else return null;continue}
      if(U[x]!==undefined){cur+=U[x]}
      else if(x==='hundred'){cur=(cur||1)*100}
      else if(SC[x]){tot+=(cur||1)*SC[x];cur=0}
      else return null;
    }
    var r=tot+cur;if(inDec)r=parseFloat(r+'.'+dec);
    return neg?-r:r;
  }
  var ON=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],TN=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  function b1000(n){var s=[];if(n>=100){s.push(ON[Math.floor(n/100)]+' hundred');n%=100}if(n>=20){s.push(TN[Math.floor(n/10)]+(n%10?'-'+ON[n%10]:''))}else if(n>0||!s.length){if(n>0)s.push(ON[n])}return s.join(' ')}
  function i2w(str){
    if(/^0+$/.test(str))return 'zero';
    str=str.replace(/^0+/,'');var names=['','thousand','million','billion','trillion'],parts=[],g=0;
    while(str.length){var c=str.slice(-3);str=str.slice(0,-3);var n=parseInt(c,10);if(n){parts.unshift(b1000(n)+(names[g]?' '+names[g]:''))}g++}
    return parts.join(' ');
  }
  $('g1').onclick=function(){var r=w2n($('w').value);$('r1').textContent=(r===null)?'Could not read these words':num(r)};
  $('g2').onclick=function(){
    var s=$('d').value.trim().replace(/,/g,''),neg=false;
    if(s.charAt(0)==='-'){neg=true;s=s.slice(1)}
    if(!/^\d{1,15}(\.\d+)?$/.test(s)){$('r2').textContent='Enter a number with up to 15 digits.';return}
    var p=s.split('.'),w=i2w(p[0]);
    if(p[1]){w+=' point '+p[1].split('').map(function(d){return ON[+d]}).join(' ')}
    $('r2').textContent=(neg?'minus ':'')+w;
  };
},
how:['To change words into a number, type the words (for example: three hundred forty five) and press Convert.','To change a number into words, type the digits and press Convert to words.','You can use big numbers, negative numbers and decimals with the word "point".'],
faq:[['Which language does it use?','English number words only, such as one, twenty, hundred, thousand and million.'],['How big can the number be?','Up to 15 digits, which means hundreds of trillions.'],['Does it understand "and"?','Yes. "One hundred and five" and "one hundred five" both give 105.']]});
})(AIO);
