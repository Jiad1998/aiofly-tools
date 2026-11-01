(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("caesar-cipher",{cat:"security",ic:"🔐",t:"Caesar Cipher",d:"Encode or decode text with a Caesar shift.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Mode <select id="m"><option value="e">Encode</option><option value="d">Decode</option></select></label><label>Shift <input type="number" id="k" value="3"></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var k=((parseInt(g('k'),10)||0)%26+26)%26;if(g('m')==='d')k=(26-k)%26;return s.replace(/[a-z]/gi,function(c){var b=c<='Z'?65:97;return String.fromCharCode((c.charCodeAt(0)-b+k)%26+b)})})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type your text.","Choose Encode or Decode and set the shift number.","Copy the result."],
faq:[["What is a Caesar cipher?","Each letter is moved a fixed number of places in the alphabet. With shift 3, A becomes D."],["Is it secure?","No. It is a simple puzzle cipher and not safe for secrets."]]});
})(AIO);
