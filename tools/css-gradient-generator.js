(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("css-gradient-generator",{cat:"web",ic:"🌅",t:"CSS Gradient Generator",d:"Make a CSS gradient background and copy the code.",
h:`<div class="row"><label>Color 1 <input type="color" id="a" value="#4f46e5"></label><label>Color 2 <input type="color" id="b" value="#06b6d4"></label><label>Type <select id="t"><option value="linear">Linear</option><option value="radial">Radial</option></select></label></div><label>Angle <input type="range" id="g" min="0" max="360" value="135"></label><div id="pv" style="height:150px;border-radius:16px;margin:10px 0"></div><textarea id="o" readonly style="min-height:70px"></textarea><button id="cp" type="button">Copy CSS</button>`,
f:function(){
function run(){var v=$('t').value==='linear'?'linear-gradient('+$('g').value+'deg, '+$('a').value+', '+$('b').value+')':'radial-gradient(circle, '+$('a').value+', '+$('b').value+')';$('pv').style.background=v;$('o').value='background: '+v+';'}
['a','b','t','g'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Pick two colors.","Choose linear or radial and set the angle.","Copy the CSS code."],
faq:[["How do I use the code?","Paste the line into the CSS of any element."],["Do gradients work in all browsers?","Yes, all modern browsers support them."]]});
})(AIO);
