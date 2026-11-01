(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("css-text-shadow-generator",{cat:"web",ic:"🔠",t:"CSS Text Shadow Generator",d:"Make text shadow and glow effects with live preview and copy the CSS.",
h:`<label>Horizontal (px): <b id="x_v">3</b></label><input type="range" id="x" min="-30" max="30" value="3"><label>Vertical (px): <b id="y_v">3</b></label><input type="range" id="y" min="-30" max="30" value="3"><label>Blur (px): <b id="b_v">6</b></label><input type="range" id="b" min="0" max="40" value="6"><label>Shadow color</label><input type="color" id="c" value="#7c3aed"><div id="pv" style="margin:12px 0"></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly style="min-height:54px"></textarea>`,
f:function(){
var ids=["x", "y", "b", "c"];
function run(){var v={};ids.forEach(function(i){v[i]=$(i).value;var s=$(i+'_v');if(s)s.textContent=v[i]});var out;try{out=(function(v){return 'text-shadow: '+v.x+'px '+v.y+'px '+v.b+'px '+v.c+';'})(v)}catch(e){out='Error: '+e.message}$('o').value=out;try{$('pv').innerHTML=(function(v){return '<div style="padding:24px;text-align:center;font-size:40px;font-weight:800;border-radius:10px;background:#f3f4f6;color:#111;text-shadow:'+v.x+'px '+v.y+'px '+v.b+'px '+v.c+'">AioFly</div>'})(v)}catch(e){}}
ids.forEach(function(i){$(i).oninput=run;$(i).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Move the sliders.","Pick a shadow color.","Copy the CSS line."],
faq:[["How do I make a glow?","Set horizontal and vertical to 0 and increase the blur, with a bright color."]]});
})(AIO);
