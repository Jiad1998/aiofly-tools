(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("emoji-remover",{cat:"text",ic:"🧽",t:"Emoji Remover",d:"Remove all emojis from your text in one tap.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){return s.replace(/[\p{Extended_Pictographic}\u200d\ufe0f\u{1F3FB}-\u{1F3FF}\u{1F1E6}-\u{1F1FF}]/gu,'').replace(/[ \t]{2,}/g,' ')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste the text with emojis.","The clean text appears below.","Copy it."],
faq:[["Are normal symbols removed too?","No. Letters, numbers and punctuation stay. Only emojis are removed."]]});
})(AIO);
