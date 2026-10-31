(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('random-picker',{cat:'gen',ic:'🎲',t:'Random Picker',d:'Pick a random number or a random name from a list.',
h:`<div class="box"><b>Random number</b><div class="row"><input type="number" id="mn" value="1"><input type="number" id="mx" value="100"></div>
<button id="g1" type="button">Pick number</button><div class="res big" id="r1">-</div></div>
<div class="box"><b>Random name / item (one per line)</b><textarea id="ls" placeholder="Rahim&#10;Karim&#10;Salma"></textarea>
<button id="g2" type="button">Pick one</button><div class="res big" id="r2">-</div></div>`,
f:function(){
  $('g1').onclick=function(){
    var a=parseInt($('mn').value),b=parseInt($('mx').value);
    if(isNaN(a)||isNaN(b)){alert('Enter both numbers.');return}
    if(a>b){var t=a;a=b;b=t}
    $('r1').textContent=a+rnd(b-a+1);
  };
  $('g2').onclick=function(){
    var l=$('ls').value.split('\n').map(function(x){return x.trim()}).filter(function(x){return x});
    if(!l.length){alert('Enter at least one item.');return}
    $('r2').textContent=l[rnd(l.length)];
  };
},
how:['For a number, set the smallest and largest value and press <b>Pick number</b>.','For names, type one name per line and press <b>Pick one</b>.','Press again for a new random result.'],
faq:[['Is it fair?','Yes. Every item has exactly the same chance, using your browser\'s secure random generator.'],['Can I use it for a giveaway?','Yes. Paste all the names and press the button once to choose a winner.']]});
})(AIO);
