(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("xml-formatter",{cat:"dev",ic:"🧱",t:"XML Formatter",d:"Make messy XML neat with proper indentation, and check it is valid.",
h:`<textarea id="i" placeholder="<root><item id="1">Hello</item></root>"></textarea><label>Indent spaces</label><select id="n"><option>2</option><option>4</option></select><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var d=new DOMParser().parseFromString(s,'application/xml');var er=d.getElementsByTagName('parsererror');if(er.length)return 'Invalid XML: '+er[0].textContent.split('\n')[0];
var ind=parseInt(g('n'))||2;function w(n,l){var p=new Array(l*ind+1).join(' ');if(n.nodeType===3){var t=n.nodeValue.trim();return t?p+t+'\n':''}if(n.nodeType===8)return p+'<!--'+n.nodeValue+'-->\n';if(n.nodeType===4)return p+'<![CDATA['+n.nodeValue+']]>\n';
if(n.nodeType!==1)return '';var a='';for(var i=0;i<n.attributes.length;i++)a+=' '+n.attributes[i].name+'="'+n.attributes[i].value+'"';
var k=[].filter.call(n.childNodes,function(c){return c.nodeType!==3||c.nodeValue.trim()});if(!k.length)return p+'<'+n.nodeName+a+'/>\n';
if(k.length===1&&k[0].nodeType===3)return p+'<'+n.nodeName+a+'>'+k[0].nodeValue.trim()+'</'+n.nodeName+'>\n';
return p+'<'+n.nodeName+a+'>\n'+k.map(function(c){return w(c,l+1)}).join('')+p+'</'+n.nodeName+'>\n'}
var h=s.match(/^\s*<\?xml[^>]*\?>/);return (h?h[0].trim()+'\n':'')+w(d.documentElement,0).trim()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your XML.","Choose the indent size.","The formatted XML appears below. Press <b>Copy result</b>."],
faq:[["Does it check errors?","Yes. If the XML is broken you will see an \"Invalid XML\" message."],["Is my data sent anywhere?","No. Everything stays in your browser."]]});
})(AIO);
