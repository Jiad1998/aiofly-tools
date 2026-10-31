(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("url-encoder-decoder",{cat:"dev",ic:"🔗",t:"URL Encoder / Decoder",d:"Encode text for a web address or decode a percent-encoded link.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Mode <select id="m"><option value="e">Encode</option><option value="d">Decode</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){return g('m')==='d'?decodeURIComponent(s.replace(/\+/g,' ')):encodeURIComponent(s)})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your text or link.","Choose Encode or Decode.","Copy the result."],
faq:[["Why encode a URL?","Spaces and special characters are not safe in links, so they are changed to %20 style codes."],["Does it work with Bangla?","Yes. Bangla letters become percent codes and can be decoded back."]]});
})(AIO);
