(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("uuid-generator",{cat:"gen",ic:"🆔",t:"UUID Generator",d:"Create random version 4 UUIDs for apps and databases.",
h:`<div class="row"><label>How many <input type="number" id="n" value="5" min="1" max="100"></label><button id="go" type="button">Generate</button><button id="cp" type="button">Copy all</button></div><textarea id="o" readonly></textarea>`,
f:function(){
function u(){var b=new Uint8Array(16);crypto.getRandomValues(b);b[6]=b[6]&15|64;b[8]=b[8]&63|128;var h=Array.from(b).map(function(x){return ('0'+x.toString(16)).slice(-2)}).join('');return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20)}
function g(){var n=Math.min(Math.max(parseInt($('n').value,10)||1,1),100),a=[];for(var i=0;i<n;i++)a.push(u());$('o').value=a.join('\n')}
$('go').onclick=g;$('cp').onclick=function(){copyText($('o').value,$('cp'))};g();
},
how:["Choose how many IDs you need.","Press Generate.","Copy them all."],
faq:[["What is a UUID?","It is a 36-character unique ID used to label records without a central counter."],["Are these safe to use?","They are created with your browser secure random generator."]]});
})(AIO);
