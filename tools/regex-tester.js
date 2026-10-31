(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("regex-tester",{cat:"dev",ic:"🧩",t:"Regex Tester",d:"Test a regular expression and see every match.",
h:`<div class="row"><input id="p" placeholder="Pattern, e.g. \\\\d+" ><input id="fl" value="g" style="max-width:90px" placeholder="flags"></div><textarea id="i" placeholder="Test text"></textarea><div class="res" id="e"></div><div class="res" id="o"></div>`,
f:function(){
function run(){var p=$('p').value;$('e').textContent='';if(!p){$('o').textContent='Type a pattern.';return}try{var re=new RegExp(p,$('fl').value.replace(/[^gimsuy]/g,'')),s=$('i').value,m=[],r;if(re.global){while((r=re.exec(s))!==null&&m.length<500){m.push(r);if(r[0]==='')re.lastIndex++}}else{r=re.exec(s);if(r)m.push(r)}
$('o').innerHTML='Matches: <b>'+m.length+'</b>'+(m.length?'<br>'+m.slice(0,50).map(function(x,i){return (i+1)+'. <b>'+esc(x[0])+'</b> at '+x.index+(x.length>1?' (groups: '+x.slice(1).map(function(g){return esc(String(g))}).join(', ')+')':'')}).join('<br>'):'')}catch(e){$('e').textContent='Invalid pattern: '+e.message;$('o').textContent=''}}
['p','fl','i'].forEach(function(i){$(i).oninput=run});run();
},
how:["Type your pattern.","Paste text to test.","See matches and their positions."],
faq:[["What are flags?","g finds all matches, i ignores case, m treats each line as a start and end."],["Which regex flavor is used?","JavaScript, the one used by web browsers."]]});
})(AIO);
