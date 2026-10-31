(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("dice-roller",{cat:"gen",ic:"🎲",t:"Dice Roller",d:"Roll 1 to 6 dice with 4, 6, 8, 10, 12 or 20 sides.",
h:`<div class="row"><label>Dice<select id="n"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select></label><label>Sides<select id="s"><option>6</option><option>4</option><option>8</option><option>10</option><option>12</option><option>20</option></select></label><button id="go" type="button">🎲 Roll</button></div><div class="res big" id="o" style="text-align:center;font-size:34px"></div><div class="res" id="t"></div>`,
f:function(){
function g(){var n=+$('n').value,s=+$('s').value,a=[],t=0;for(var i=0;i<n;i++){var r=rnd(s)+1;a.push(r);t+=r}$('o').textContent=a.join('  ');$('t').innerHTML='Total: <b>'+t+'</b>'}
$('go').onclick=g;g();
},
how:["Choose how many dice and how many sides.","Press Roll.","Read each die and the total."],
faq:[["Is it fair?","Yes. It uses your browser secure random generator."],["Can I use it for board games?","Yes, and for role-playing games with d20 dice."]]});
})(AIO);
