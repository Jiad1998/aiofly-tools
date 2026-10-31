(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-repeater",{cat:"text",ic:"🔂",t:"Text Repeater",d:"Repeat a word or sentence many times with your own separator.",
h:`<textarea id="i" placeholder="Text to repeat"></textarea><div class="row"><label>Times <input type="number" id="n" value="5" min="1" max="5000"></label><label>Separator <select id="sp"><option value="nl">New line</option><option value="sp">Space</option><option value="cm">Comma</option><option value="no">None</option></select></label></div><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var n=Math.min(Math.max(parseInt(g('n'),10)||1,1),5000);var sep=g('sp')==='nl'?'\n':g('sp')==='sp'?' ':g('sp')==='cm'?', ':'';var a=[];for(var i=0;i<n;i++)a.push(s);return a.join(sep)})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type the text to repeat.","Enter how many times (up to 5000).","Choose a separator and copy."],
faq:[["What is the limit?","You can repeat up to 5,000 times to keep your phone fast."],["What can I use it for?","Practice text, test data, and messages for chat apps."]]});
})(AIO);
