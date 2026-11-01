(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("random-gradient-generator",{cat:"color",ic:"🌈",t:"Random Gradient Generator",d:"Get random CSS gradients and copy the code with one tap.",
h:`<div class="row"><button id="go" type="button">New gradients</button></div><div id="o" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px"></div>`,
f:function(){
function col(){return '#'+('000000'+rnd(16777216).toString(16)).slice(-6)}
function g(){var h='';for(var i=0;i<8;i++){var v='linear-gradient('+rnd(360)+'deg, '+col()+', '+col()+')';h+='<button type="button" class="gg" data-v="background: '+v+';" style="height:96px;border-radius:14px;border:0;cursor:pointer;background:'+v+';color:#fff;text-shadow:0 1px 3px #000;font-weight:700">Copy CSS</button>'}$('o').innerHTML=h}
$('go').onclick=g;$('o').onclick=function(e){var b=e.target.closest('.gg');if(b)copyText(b.getAttribute('data-v'),b)};g();
},
how:["Press New gradients.","Tap a gradient to copy its CSS.","Paste it into your design."],
faq:[["How do I use the code?","Paste the line into the CSS of any element."],["Can I make my own?","Use the CSS Gradient Generator tool for full control."]]});
})(AIO);
