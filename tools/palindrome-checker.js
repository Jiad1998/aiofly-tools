(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("palindrome-checker",{cat:"text",ic:"🪞",t:"Palindrome Checker",d:"Check if a word or sentence reads the same backwards.",
h:`<textarea id="i" placeholder="Type a word, for example madam"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var c=Array.from(s.toLowerCase()).filter(function(x){return /[a-z0-9\u0980-\u09ff]/.test(x)});if(!c.length)return '';var r=c.slice().reverse().join(''),o=c.join('');return (o===r?'Yes, it is a palindrome.':'No, it is not a palindrome.')+'\nCleaned text: '+o+'\nReversed: '+r})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a word or sentence.","Read the answer.","Spaces and punctuation are ignored."],
faq:[["What is a palindrome?","A word or phrase that reads the same forward and backward, like madam."],["Does it ignore capital letters?","Yes."]]});
})(AIO);
