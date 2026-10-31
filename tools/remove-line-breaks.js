(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("remove-line-breaks",{cat:"text",ic:"↩️",t:"Remove Line Breaks",d:"Join broken lines into one paragraph.",
h:`<textarea id="i" placeholder="Type or paste your text here..."></textarea><div class="row"><label>Join with <select id="m"><option value="p">Space</option><option value="c">Comma</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var r=s.replace(/\r?\n+/g,g('m')==='p'?' ':g('m')==='c'?', ':' ').replace(/[ \t]{2,}/g,' ').trim();return r})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your text.","Choose what to put between the old lines.","Copy the joined text."],
faq:[["Why remove line breaks?","Text copied from PDFs often has a break at the end of each line."],["Can I make a comma list?","Yes. Choose comma."]]});
})(AIO);
