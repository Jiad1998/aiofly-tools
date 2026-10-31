(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("find-and-replace",{cat:"text",ic:"🔍",t:"Find and Replace",d:"Replace words in a long text in one step and see how many were changed.",
h:`<textarea id="i" placeholder="Your text"></textarea><div class="row"><input id="a" placeholder="Find"><input id="b" placeholder="Replace with"></div><div class="row"><label><input type="checkbox" id="c"> Match case</label><label><input type="checkbox" id="w"> Whole word</label><button id="cp" type="button">Copy result</button></div><div class="res" id="n"></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function run(){var s=$('i').value,a=$('a').value,b=$('b').value;if(!a){$('o').value=s;$('n').textContent='';return}
var p=a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');if($('w').checked)p='\\b'+p+'\\b';var re=new RegExp(p,$('c').checked?'g':'gi');var c=(s.match(re)||[]).length;
$('o').value=s.replace(re,function(){return b});$('n').textContent=c+' replacement'+(c===1?'':'s')+' made.'}
['i','a','b','c','w'].forEach(function(id){$(id).oninput=run;$(id).onchange=run});$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your text.","Type the word to find and the new word.","Copy the changed text."],
faq:[["Is it case sensitive?","Only when you tick Match case."],["Can I replace with nothing?","Yes. Leave Replace with empty to delete the word."]]});
})(AIO);
