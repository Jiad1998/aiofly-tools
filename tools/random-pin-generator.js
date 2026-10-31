(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("random-pin-generator",{cat:"security",ic:"🔢",t:"Random PIN Generator",d:"Make a random 4 to 10 digit PIN.",
h:`<div class="row"><label>Length <select id="n"><option>4</option><option>6</option><option>8</option><option>10</option></select></label><button id="go" type="button">Generate</button><button id="cp" type="button">Copy</button></div><div class="res big" id="o" style="text-align:center;letter-spacing:6px;font-size:36px"></div>`,
f:function(){
function g(){var n=parseInt($('n').value,10),s='';for(var i=0;i<n;i++)s+=rnd(10);$('o').textContent=s}
$('go').onclick=g;$('n').onchange=g;$('cp').onclick=function(){copyText($('o').textContent,$('cp'))};g();
},
how:["Choose a length.","Press Generate.","Copy the PIN."],
faq:[["Is the PIN really random?","Yes. It uses your browser secure random generator."],["Which length is best?","Six or more digits is safer than four."]]});
})(AIO);
