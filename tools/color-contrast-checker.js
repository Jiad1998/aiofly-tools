(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("color-contrast-checker",{cat:"web",ic:"👁️",t:"Color Contrast Checker",d:"Check text and background colors against WCAG accessibility rules.",
h:`<div class="row"><label>Text color <input type="color" id="a" value="#111827"></label><label>Background <input type="color" id="b" value="#ffffff"></label></div><div id="pv" style="padding:18px;border-radius:12px;font-size:20px;font-weight:600;margin:10px 0">Sample text looks like this</div><div class="res" id="o"></div>`,
f:function(){
function L(h){var c=[1,3,5].map(function(i){var v=parseInt(h.substr(i,2),16)/255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function run(){var a=$('a').value,b=$('b').value,l1=L(a),l2=L(b),r=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);$('pv').style.color=a;$('pv').style.background=b;
function p(x){return x?'✅ Pass':'❌ Fail'}
$('o').innerHTML='Contrast ratio: <b>'+r.toFixed(2)+' : 1</b><br>Normal text AA (4.5): <b>'+p(r>=4.5)+'</b><br>Large text AA (3): <b>'+p(r>=3)+'</b><br>Normal text AAA (7): <b>'+p(r>=7)+'</b>'}
$('a').oninput=run;$('b').oninput=run;run();
},
how:["Pick the text color and background color.","Check the live sample.","Make sure it passes AA at least."],
faq:[["What contrast do I need?","WCAG AA asks for at least 4.5 to 1 for normal text and 3 to 1 for large text."],["Why does contrast matter?","Good contrast helps everyone read your page, especially in sunlight or with poor eyesight."]]});
})(AIO);
