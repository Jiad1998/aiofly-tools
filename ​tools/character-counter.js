(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("character-counter",{cat:"writing",ic:"🔡",t:"Character Counter",d:"Count characters and check limits for posts, captions, titles and SMS.",
h:`<textarea id="i" placeholder="Type or paste your text..."></textarea><div class="res" id="o"></div><div class="box"><b>Limits</b><div id="l"></div></div>`,
f:function(){
var L=[['X (Twitter) post',280],['Instagram caption',2200],['Facebook post',63206],['YouTube title',100],['YouTube description',5000],['SMS (one message)',160],['Meta description',160],['Page title',60]];
function run(){var n=Array.from($('i').value).length;$('o').innerHTML='Characters: <b>'+n+'</b>';$('l').innerHTML=L.map(function(x){var left=x[1]-n;return esc(x[0])+': <b style="color:'+(left<0?'#ef4444':'inherit')+'">'+(left<0?'over by '+(-left):left+' left')+'</b> / '+x[1]}).join('<br>')}
$('i').oninput=run;run();
},
how:["Type or paste your text.","See the character count.","Check the limit list for each platform."],
faq:[["Do spaces count?","Yes. Every letter, space and symbol counts as a character."],["How are emoji counted?","Each emoji counts as one character here. Some platforms count them as two."]]});
})(AIO);
