(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-to-binary",{cat:"dev",ic:"💻",t:"Text to Binary Converter",d:"Turn text into binary code and back again.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Mode <select id="m"><option value="e">Text to binary</option><option value="d">Binary to text</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){if(g('m')==='e'){return Array.from(new TextEncoder().encode(s)).map(function(b){return ('00000000'+b.toString(2)).slice(-8)}).join(' ')}var p=s.trim().split(/\s+/).filter(Boolean);return new TextDecoder().decode(new Uint8Array(p.map(function(x){var n=parseInt(x,2);if(isNaN(n)||n>255)throw new Error('Invalid binary: '+x);return n})))})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Choose Text to binary or Binary to text.","Type or paste your input.","Copy the answer."],
faq:[["How does it work?","Each byte of the text is shown as 8 binary digits (0 and 1)."],["Can it handle Bangla?","Yes. It uses UTF-8, so Bangla letters take 3 bytes each."]]});
})(AIO);
