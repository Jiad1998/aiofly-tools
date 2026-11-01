(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("whatsapp-text-formatter",{cat:"social",ic:"💬",t:"WhatsApp Text Formatter",d:"Add bold, italic, strikethrough and monospace to WhatsApp text.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Style <select id="m"><option value="b">Bold</option><option value="i">Italic</option><option value="s">Strikethrough</option><option value="c">Monospace</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var m=g('m'),w={b:['*','*'],i:['_','_'],s:['~','~'],c:['```','```']}[m];return s.split('\n').map(function(l){return l.trim()?w[0]+l.trim()+w[1]:l}).join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type your message.","Choose a style.","Copy and paste it into WhatsApp."],
faq:[["How does WhatsApp format text?","Put * around words for bold, _ for italic, ~ for strikethrough and ``` for monospace."],["Does it work for each line?","Yes. Each non-empty line gets the markers."]]});
})(AIO);
