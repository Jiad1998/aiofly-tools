(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("random-string-generator",{cat:"security",ic:"🔤",t:"Random String Generator",d:"Make random strings for tokens, codes and test data.",
h:`<div class="row" style="flex-wrap:wrap"><label>Length <input type="number" id="n" value="16" min="1" max="200"></label><label>Count <input type="number" id="c" value="5" min="1" max="50"></label></div><div class="row"><label><input type="checkbox" id="a" checked> a-z</label><label><input type="checkbox" id="b" checked> A-Z</label><label><input type="checkbox" id="d" checked> 0-9</label><label><input type="checkbox" id="s"> Symbols</label></div><button id="go" type="button">Generate</button> <button id="cp" type="button">Copy all</button><textarea id="o" readonly></textarea>`,
f:function(){
function g(){var cs='';if($('a').checked)cs+='abcdefghijklmnopqrstuvwxyz';if($('b').checked)cs+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';if($('d').checked)cs+='0123456789';if($('s').checked)cs+='!@#$%^&*()-_=+[]{};:,.?';if(!cs){$('o').value='Choose at least one set.';return}
var n=Math.min(Math.max(parseInt($('n').value,10)||1,1),200),c=Math.min(Math.max(parseInt($('c').value,10)||1,1),50),o=[];for(var i=0;i<c;i++){var s='';for(var j=0;j<n;j++)s+=cs[rnd(cs.length)];o.push(s)}$('o').value=o.join('\n')}
$('go').onclick=g;$('cp').onclick=function(){copyText($('o').value,$('cp'))};g();
},
how:["Choose the length and how many strings.","Tick the character sets you want.","Press Generate and copy."],
faq:[["Are these strings secure?","They use your browser secure random generator."],["What can I use them for?","Test data, coupon codes and temporary tokens."]]});
})(AIO);
