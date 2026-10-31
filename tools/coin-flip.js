(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("coin-flip",{cat:"gen",ic:"🪙",t:"Coin Flip",d:"Flip a fair coin online and keep count of heads and tails.",
h:`<div class="res big" id="r" style="font-size:54px;text-align:center">🪙</div><div class="center"><button id="go" type="button">Flip the coin</button></div><div class="res" id="s"></div>`,
f:function(){
var H=0,T=0;$('go').onclick=function(){var h=rnd(2)===0;if(h)H++;else T++;$('r').textContent=h?'Heads':'Tails';$('s').innerHTML='Heads: <b>'+H+'</b> &nbsp; Tails: <b>'+T+'</b>'}
},
how:["Press the button.","Read Heads or Tails.","Flip again as many times as you like."],
faq:[["Is it fair?","Yes. It uses your browser secure random number generator."],["Can I use it to decide?","Sure, for fun choices like who goes first."]]});
})(AIO);
