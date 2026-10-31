(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("box-shadow-generator",{cat:"web",ic:"🔲",t:"CSS Box Shadow Generator",d:"Design a box shadow with sliders and copy the CSS.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 130px">X offset <input type="range" id="x" min="-50" max="50" value="0"></label><label style="flex:1 1 130px">Y offset <input type="range" id="y" min="-50" max="50" value="10"></label><label style="flex:1 1 130px">Blur <input type="range" id="bl" min="0" max="100" value="30"></label><label style="flex:1 1 130px">Spread <input type="range" id="sp" min="-30" max="50" value="0"></label><label style="flex:1 1 130px">Opacity <input type="range" id="op" min="0" max="100" value="30"></label><label style="flex:1 1 130px">Color <input type="color" id="c" value="#000000"></label></div><label><input type="checkbox" id="in"> Inset</label><div style="padding:40px;background:#f1f5f9;border-radius:16px;margin:10px 0"><div id="pv" style="width:150px;height:100px;margin:auto;background:#fff;border-radius:14px"></div></div><textarea id="o" readonly style="min-height:70px"></textarea><button id="cp" type="button">Copy CSS</button>`,
f:function(){
function rgb(h,a){return 'rgba('+parseInt(h.substr(1,2),16)+','+parseInt(h.substr(3,2),16)+','+parseInt(h.substr(5,2),16)+','+a+')'}
function run(){var v=($('in').checked?'inset ':'')+$('x').value+'px '+$('y').value+'px '+$('bl').value+'px '+$('sp').value+'px '+rgb($('c').value,$('op').value/100);$('pv').style.boxShadow=v;$('o').value='box-shadow: '+v+';'}
['x','y','bl','sp','op','c','in'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Move the sliders and watch the preview.","Pick the shadow color and opacity.","Copy the CSS code."],
faq:[["What does blur do?","A larger blur makes the shadow softer and wider."],["What is inset?","An inset shadow appears inside the box instead of outside."]]});
})(AIO);
