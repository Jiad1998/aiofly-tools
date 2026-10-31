(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("number-base-converter",{cat:"convert",ic:"🔢",t:"Number Base Converter",d:"Convert numbers between binary, octal, decimal and hexadecimal.",
h:`<textarea id="i" placeholder="Type a number, for example 255"></textarea><div class="row"><label>Input base <select id="b"><option value="10">10 (decimal)</option><option value="2">2 (binary)</option><option value="8">8 (octal)</option><option value="16">16 (hex)</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var b=parseInt(g('b'),10),v=s.trim();if(!v)return '';if(!/^[0-9a-zA-Z]+$/.test(v))return 'Use only letters and digits.';var n=parseInt(v,b);if(isNaN(n))return 'This is not a valid base '+b+' number.';return 'Binary: '+n.toString(2)+'\nOctal: '+n.toString(8)+'\nDecimal: '+n.toString(10)+'\nHex: '+n.toString(16).toUpperCase()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Choose the base of the number you type.","Type the number in the box.","Binary, octal, decimal and hex appear below."],
faq:[["How do I read binary?","Each digit is a power of two. 1010 in binary is 8 + 2 = 10."],["What are hex digits?","Hex uses 0-9 and A-F. A means 10 and F means 15."]]});
})(AIO);
