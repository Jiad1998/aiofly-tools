(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("readability-score-checker",{cat:"writing",ic:"📖",t:"Readability Score Checker",d:"Check how easy your English text is to read with the Flesch score.",
h:`<textarea id="i" placeholder="Paste English text (at least a few sentences)..."></textarea><div class="res" id="o"></div>`,
f:function(){
function syl(w){w=w.toLowerCase().replace(/[^a-z]/g,'');if(!w)return 0;if(w.length<=3)return 1;w=w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,'');var m=w.match(/[aeiouy]{1,2}/g);return m?m.length:1}
function run(){var s=$('i').value.trim();var w=s.match(/[A-Za-z']+/g)||[],se=s.split(/[.!?]+/).filter(function(x){return x.trim()}).length;
if(w.length<10||!se){$('o').textContent='Paste at least 10 words.';return}
var sy=w.reduce(function(a,b){return a+syl(b)},0),sc=206.835-1.015*(w.length/se)-84.6*(sy/w.length),g=0.39*(w.length/se)+11.8*(sy/w.length)-15.59;
var lv=sc>=90?'Very easy':sc>=70?'Easy':sc>=60?'Plain English':sc>=50?'Fairly hard':sc>=30?'Hard':'Very hard';
$('o').innerHTML='Reading ease: <b>'+sc.toFixed(1)+'</b> ('+lv+')<br>Grade level: <b>'+Math.max(0,g).toFixed(1)+'</b><br>Words: <b>'+w.length+'</b> &nbsp; Sentences: <b>'+se+'</b><br>Words per sentence: <b>'+(w.length/se).toFixed(1)+'</b>'}
$('i').oninput=run;run();
},
how:["Paste your English text.","Read the score and grade level.","Shorten long sentences if the score is low."],
faq:[["What is a good Flesch score?","60 to 70 is plain English that most people understand easily."],["Does it work for Bangla?","No. The formula is made for English text."]]});
})(AIO);
