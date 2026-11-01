(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("faq-schema-generator",{cat:"seo",ic:"❓",t:"FAQ Schema Generator",d:"Create FAQ structured data (JSON-LD) for your page.",
h:`<div id="rows"></div><button id="add" type="button">+ Add question</button><textarea id="o" readonly></textarea><button id="cp" type="button">Copy code</button>`,
f:function(){
var rows=$('rows');function row(){var d=document.createElement('div');d.className='box';d.innerHTML='<input class="q" placeholder="Question"><textarea class="a" placeholder="Answer" style="min-height:70px"></textarea>';rows.appendChild(d)}
row();row();
function run(){var m=[].map.call(rows.children,function(d){return {q:d.querySelector('.q').value.trim(),a:d.querySelector('.a').value.trim()}}).filter(function(x){return x.q&&x.a});
$('o').value=m.length?'<script type="application/ld+json">\n'+JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:m.map(function(x){return {'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}}})},null,2)+'\n<\/script>':''}
rows.oninput=run;$('add').onclick=function(){row()};$('cp').onclick=function(){copyText($('o').value,$('cp'))};
},
how:["Type each question and its answer.","Press + Add question for more.","Copy the code and paste it into your page HTML."],
faq:[["What is FAQ schema?","It is code that tells search engines about the questions and answers on your page."],["Does it guarantee rich results?","No. Search engines decide when to show them."]]});
})(AIO);
