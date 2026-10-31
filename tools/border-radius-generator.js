(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("border-radius-generator",{cat:"web",ic:"⬜",t:"CSS Border Radius Generator",d:"Round the corners of a box and copy the CSS.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 130px">Top left <input type="range" id="a" min="0" max="100" value="20"></label><label style="flex:1 1 130px">Top right <input type="range" id="b" min="0" max="100" value="20"></label><label style="flex:1 1 130px">Bottom right <input type="range" id="c" min="0" max="100" value="20"></label><label style="flex:1 1 130px">Bottom left <input type="range" id="d" min="0" max="100" value="20"></label></div><div id="pv" style="width:200px;height:140px;background:linear-gradient(135deg,#4f46e5,#06b6d4);margin:14px auto"></div><textarea id="o" readonly style="min-height:60px"></textarea><button id="cp" type="button">Copy CSS</button>`,
f:function(){
function run(){var v=$('a').value+'px '+$('b').value+'px '+$('c').value+'px '+$('d').value+'px';$('pv').style.borderRadius=v;$('o').value='border-radius: '+v+';'}
['a','b','c','d'].forEach(function(i){$(i).oninput=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Move the four corner sliders.","Watch the shape change.","Copy the CSS code."],
faq:[["How do I make a circle?","Use a square box and set border-radius to 50%."],["What order are the corners in?","Top left, top right, bottom right, bottom left."]]});
})(AIO);
