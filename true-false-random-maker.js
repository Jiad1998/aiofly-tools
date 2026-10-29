(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('true-false-random-maker',{cat:'gen',ic:'✅',t:'True / False Random Maker',d:'Get a random True or False answer, or make a whole random True/False list for quizzes and games.',
h:`<button id="g1" type="button">Pick True or False</button>
<div class="res big center" id="r1">-</div>
<div class="box"><b>Make a list</b><label>How many items (1 to 50)</label><input type="number" id="n" min="1" max="50" value="10">
<button id="g2" type="button">Make list</button><button id="cp" type="button">Copy</button>
<textarea id="o" style="min-height:150px"></textarea></div>`,
f:function(){
  function tf(){return rnd(2)?'True':'False'}
  $('g1').onclick=function(){$('r1').textContent=tf()};
  $('g2').onclick=function(){
    var n=Math.min(50,Math.max(1,parseInt($('n').value)||1)),a=[];
    for(var i=1;i<=n;i++){a.push(i+'. '+tf())}
    $('o').value=a.join('\n');
  };
  $('cp').onclick=function(){copyText($('o').value,this)};
},
how:['Press <b>Pick True or False</b> for a single answer.','Or choose how many items and press <b>Make list</b>.','Press <b>Copy</b> to use the list in your quiz or game.'],
faq:[['Is it truly random?','Yes. Each answer has a 50 percent chance and uses your browser\'s secure random generator.'],['Can I use it to make a quiz answer key?','Yes. Write your statements, then use the list as a random True/False key. Make sure each answer is actually correct for your statement.']]});
})(AIO);
