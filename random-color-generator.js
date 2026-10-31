(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("random-color-generator",{cat:"color",ic:"🌈",t:"Random Color Generator",d:"Get random HEX colors and copy any with one tap.",
h:`<div class="row"><button id="go" type="button">New colors</button></div><div id="o" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px"></div>`,
f:function(){
function g(){var h='';for(var i=0;i<12;i++){var c='#'+('000000'+rnd(16777216).toString(16)).slice(-6).toUpperCase();h+='<button type="button" class="cc" data-c="'+c+'" style="height:84px;border-radius:14px;border:1px solid rgba(128,128,128,.4);background:'+c+';color:#fff;text-shadow:0 1px 3px #000;font-weight:700;cursor:pointer">'+c+'</button>'}$('o').innerHTML=h}
$('go').onclick=g;$('o').onclick=function(e){var b=e.target.closest('.cc');if(b)copyText(b.getAttribute('data-c'),b)};g();
},
how:["Press New colors.","Tap a color to copy its HEX code.","Use it in designs, posts or websites."],
faq:[["What is a HEX code?","It is a six-digit code starting with #, such as #FF5733, that names a color."],["Can I get a palette?","Each press gives you twelve colors to pick from."]]});
})(AIO);
