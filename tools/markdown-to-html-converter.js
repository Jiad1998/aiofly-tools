(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("markdown-to-html-converter",{cat:"text",ic:"📝",t:"Markdown to HTML Converter",d:"Turn Markdown text into clean HTML code.",
h:`<textarea id="i" placeholder="# Title

Some **bold** text and a [link](https://example.com)"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){function inl(t){return t.replace(/`([^`]+)`/g,'<code>$1</code>').replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1">').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>')}
var L=s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').split('\n'),o=[],list=null,par=[];
function fp(){if(par.length){o.push('<p>'+inl(par.join(' '))+'</p>');par=[]}}function fl(){if(list){o.push('</'+list+'>');list=null}}
L.forEach(function(l){var m;if(m=l.match(/^(#{1,6})\s+(.*)$/)){fp();fl();o.push('<h'+m[1].length+'>'+inl(m[2])+'</h'+m[1].length+'>')}else if(m=l.match(/^\s*[-*+]\s+(.*)$/)){fp();if(list!=='ul'){fl();o.push('<ul>');list='ul'}o.push('<li>'+inl(m[1])+'</li>')}else if(m=l.match(/^\s*\d+[.)]\s+(.*)$/)){fp();if(list!=='ol'){fl();o.push('<ol>');list='ol'}o.push('<li>'+inl(m[1])+'</li>')}else if(m=l.match(/^>\s?(.*)$/)){fp();fl();o.push('<blockquote>'+inl(m[1])+'</blockquote>')}else if(/^\s*$/.test(l)){fp();fl()}else{fl();par.push(l.trim())}});fp();fl();return o.join('\n')})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type or paste Markdown.","The HTML code appears.","Copy it into your page or blog post."],
faq:[["What Markdown is supported?","Headings, bold, italic, links, images, code, quotes and lists."],["Is the HTML safe?","Raw HTML in your text is escaped, so it shows as text."]]});
})(AIO);
