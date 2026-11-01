(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-to-hex-converter",{cat:"dev",ic:"🔟",t:"Text to Hex Converter",d:"Convert text to hexadecimal and back.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Mode <select id="m"><option value="e">Text to hex</option><option value="d">Hex to text</option></select></label><label>Separator <select id="sp"><option value=" ">Space</option><option value="">None</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){if(g('m')==='e'){return Array.from(new TextEncoder().encode(s)).map(function(b){return ('0'+b.toString(16)).slice(-2)}).join(g('sp')===' '?' ':'')}var h=s.replace(/[^0-9a-fA-F]/g,'');if(h.length%2)return 'Hex needs an even number of digits.';var a=[];for(var i=0;i<h.length;i+=2)a.push(parseInt(h.substr(i,2),16));return new TextDecoder().decode(new Uint8Array(a))})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Choose Text to hex or Hex to text.","Type or paste your input.","Copy the result."],
faq:[["What is hex?","Hexadecimal uses digits 0-9 and letters A-F to show bytes compactly."],["Does it handle Bangla?","Yes, using UTF-8."]]});
})(AIO);
