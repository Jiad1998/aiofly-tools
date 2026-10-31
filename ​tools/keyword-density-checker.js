(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("keyword-density-checker",{cat:"seo",ic:"🔎",t:"Keyword Density Checker",d:"Find which words you use most and how much of your text they fill.",
h:`<textarea id="i" placeholder="Paste your article or page text..."></textarea><div class="row"><label>Show <select id="n"><option>10</option><option>20</option><option>50</option></select> words</label><label><input type="checkbox" id="sw" checked> Skip common words</label></div><div class="res" id="o"></div>`,
f:function(){
var SW='a an the and or but of to in on at for with is are was were be been it its this that these those as by from i you he she we they not no so if then than into about our your their my me his her us can will would should could do does did have has had more most very just also'.split(' ');
function run(){var s=$('i').value.toLowerCase().match(/[a-z0-9\u0980-\u09ff']+/g)||[],tot=s.length,m={};
s.forEach(function(w){if(w.length<2)return;if($('sw').checked&&SW.indexOf(w)>-1)return;m[w]=(m[w]||0)+1});
var a=Object.keys(m).sort(function(x,y){return m[y]-m[x]}).slice(0,parseInt($('n').value,10));
$('o').innerHTML=tot?'Total words: <b>'+tot+'</b><hr>'+a.map(function(w){return esc(w)+': <b>'+m[w]+'</b> times ('+(m[w]/tot*100).toFixed(1)+'%)'}).join('<br>'):'Paste some text to start.'}
$('i').oninput=run;$('n').onchange=run;$('sw').onchange=run;run();
},
how:["Paste your article text.","Choose how many top words to show.","Check that your main keyword is used naturally."],
faq:[["What is a good keyword density?","Most experts suggest 1 to 2 percent. Write for readers first and avoid stuffing keywords."],["Does it support Bangla?","Yes. Bangla words are counted too."]]});
})(AIO);
